import {connectToDB} from '../../../utils/database.js';
import RenderCount from '../../../models/renderCount.js';

export const POST = async (req) => {
  const {countType} = await req.json();

  try{
    await connectToDB(); // bc lambda function
    const newRenderCount = new RenderCount({
      countType
    })

    await newRenderCount.save();
    return new Response(JSON.stringify(newRenderCount), {status: 201})
  } catch(err){
    return new Response('Failed to create new member', {status: 500})
  }
}

export const GET = async (req) => {

  try{
    await connectToDB(); // bc lambda function
    const allRenderCount = await RenderCount.find({countType: "Counting all renders"}).then(data => data[0]);

    return new Response(JSON.stringify(allRenderCount), {status: 201})
  } catch(err){
    return new Response('Failed to get all renders', {status: 500})
  }
}
export const PATCH = async (req) => {
  try{
    await connectToDB();
    const filter = {countType: "Counting all renders"};
    await RenderCount.updateOne(filter, {$inc: {count: 1}});
    return new Response(('successfully incremented render count'), {status: 201});
  }  catch(err){
    return new Response('Failed to increment render count', {status: 500})
  }
}


