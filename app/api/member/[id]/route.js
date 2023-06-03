import {connectToDB} from '../../../../utils/database.js';
import Member from '@/models/member.js';



export const GET = async (req, {params}) => {
  // find last entry id which is the number of renders
  try{
    await connectToDB(); // bc lambda function
    const {id} = params
    const oneMember = await Member.findById(id);
    return new Response(JSON.stringify(oneMember), {status: 201})
  } catch(err){
    return new Response('Failed to get Member entry', {status: 500})
  }
}

export const PATCH = async (req, {params}) => {
  const {flavor} = await req.json();
  const {id} = params
  try{
    await connectToDB();
    const filter = {_id: id};
    const update = {flavor};

    await Member.findOneAndUpdate(filter, update);
    return new Response(('successfully updated member render count'), {status: 201});
  }  catch(err){
    return new Response('Failed to update member render count', {status: 500})
  }
}

export const DELETE = async (req, {params}) => {
  const {id} = params
  try{
    await connectToDB();
    const filter = {_id: id};

    await Member.findOneAndDelete(filter);
    return new Response(('successfully deleted member entry'), {status: 201});
  }  catch(err){
    return new Response('Failed to delte member entry', {status: 500})
  }
}


