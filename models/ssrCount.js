import {Schema, model, models} from 'mongoose';


const RamenSchema = new Schema({
  flavor: {
    type: String,
    required: [true, 'flavor is required'],
  }
});

// on every SSR, add false value with unique id, then update prev if it exists, and delete the first 

const Ramen = models.Ramen || model("Ramen", RamenSchema);

export default Ramen;