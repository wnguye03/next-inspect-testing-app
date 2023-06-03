import {connectToDB} from '../../../utils/database.js';
import Ramen from '../../../models/ramen.js';

export const POST = async (req) => {
  const {flavor} = await req.json();

  try{
    await connectToDB(); // bc lambda function
    const newRamenFlavor = new Ramen({
      flavor
    })

    await newRamenFlavor.save();
    return new Response(JSON.stringify(newRamenFlavor), {status: 201})
  } catch(err){
    return new Response('Failed to create new Ramen entry', {status: 500})
  }
}

export const GET = async (req) => {
  // find last entry id which is the number of renders
  try{
    await connectToDB(); // bc lambda function
    const allRamen = await Ramen.find();

    return new Response(JSON.stringify(allRamen), {status: 201})
  } catch(err){
    return new Response('Failed to get all Ramen entries', {status: 500})
  }
}

export const PATCH = async (req) => {
  const {flavor, id} = await req.json();
  try{
    await connectToDB();
    const filter = {_id: id};
    const update = {flavor};

    await Ramen.findOneAndUpdate(filter, update);
    return new Response(('successfully updated ramen flavor'), {status: 201});
  }  catch(err){
    return new Response('Failed to update Ramen flavor', {status: 500})
  }
}

