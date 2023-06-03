import {connectToDB} from '../../../../utils/database.js';
import Ramen from '../../../../models/ramen.js';



export const GET = async (req, {params}) => {
  // find last entry id which is the number of renders
  try{
    await connectToDB(); // bc lambda function
    const {id} = params
    const oneRamen = await Ramen.findById(id);
    return new Response(JSON.stringify(oneRamen), {status: 201})
  } catch(err){
    return new Response('Failed to get Ramen entry', {status: 500})
  }
}

export const PATCH = async (req, {params}) => {
  const {flavor} = await req.json();
  const {id} = params
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

