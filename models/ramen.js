import {Schema, model, models} from 'mongoose';


const RamenSchema = new Schema({
  flavor: {
    type: String,
    required: [true, 'flavor is required'],
  }
});


const Ramen = models.Ramen || model("Ramen", RamenSchema);

export default Ramen;