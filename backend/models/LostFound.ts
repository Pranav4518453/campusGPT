import { Schema, model } from 'mongoose';

const LostFoundSchema = new Schema({
  image: String,
  description: String,
  location: String,
  tags: [String],
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

export default model('LostFound', LostFoundSchema);