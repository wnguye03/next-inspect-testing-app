import {connectToDB} from '../../../utils/database.js';
import SSRCount from '../../../models/ssrCount.js';

export const POST = async (req) => {
  const {updated} = await req.json();

  try{
    await connectToDB(); // bc lambda function
    const newSSRCount = new SSRCount({
      updated
    })

    await newSSRCount.save();
    return new Response(JSON.stringify(newSSRCount), {status: 201})
  } catch(err){
    return new Response('Failed to create new SSRCount entry', {status: 500})
  }
}

export const GET = async (req) => {
  // find last entry id which is the number of renders
  try{
    await connectToDB(); // bc lambda function
    const allSSRCount = await SSRCount.find();

    return new Response(JSON.stringify(allSSRCount), {status: 201})
  } catch(err){
    return new Response('Failed to get all SSRCount entries', {status: 500})
  }
}

export const PATCH = async (req) => {
  const {updated} = await req.json();
  try{
    await connectToDB();
    const lastEntry = await SSRCount.find().limit(1).sort({$natural:-1}) 

    return new Response(JSON.stringify(lastEntry), {status: 201})
  }  catch(err){
    return new Response('Failed to update last SSRCount entry', {status: 500})
  }
}