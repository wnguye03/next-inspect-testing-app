import {connectToDB} from '../../../utils/database.js';
import Member from '../../../models/member';

export const POST = async (req) => {
  const {firstName, lastName} = await req.json();

  try{
    await connectToDB(); // bc lambda function
    const newMember = new Member({
      firstName,
      lastName
    })

    await newMember.save();
    return new Response(JSON.stringify(newMember), {status: 201})
  } catch(err){
    return new Response('Failed to create new member', {status: 500})
  }
}

export const GET = async (req) => {

  try{
    await connectToDB(); // bc lambda function
    const allMembers = await Member.find();

    return new Response(JSON.stringify(allMembers), {status: 201})
  } catch(err){
    return new Response('Failed to get all members', {status: 500})
  }
}
export const PATCH = async (req) => {
  try{
    await connectToDB();
    const filter = {_id: '646be45a8dc55b0575cf2bc9'};
    await Member.findOneAndUpdate(filter, {$inc: {renderCount: 1}});
    return new Response(('successfully updated ramen flavor'), {status: 201});
  }  catch(err){
    return new Response('Failed to update Ramen flavor', {status: 500})
  }
}


