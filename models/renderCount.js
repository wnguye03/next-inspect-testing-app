import {Schema, model, models} from 'mongoose';


const RenderCountSchema = new Schema({
  countType: {
    type: String,
    required: [true, 'countType is required'],
  },
  count: {
    type: Number,
    required: [true, 'count is required'],
    default: 0
  }
});

const RenderCount = models.RenderCount || model("RenderCount", RenderCountSchema);

export default RenderCount;