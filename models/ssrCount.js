import {Schema, model, models} from 'mongoose';


const ssrCountSchema = new Schema({
  updated:{
    type: Boolean,
  }
});

// on every SSR, add false value with unique id, then update prev if it exists, and delete the first 

const SSRCount = models.SSRCount || model("SSRCount", ssrCountSchema);

export default SSRCount;