import { Schema, model } from 'mongoose';

const AnnouncementSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

export default model('Announcement', AnnouncementSchema);