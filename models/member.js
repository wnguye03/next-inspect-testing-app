import {Schema, model, models} from 'mongoose';


const MemberSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName:{
    type: String,
    required: [true, 'Last name is required'],
  }
});

const Member = models.Member || model("Member", MemberSchema);

export default Member;