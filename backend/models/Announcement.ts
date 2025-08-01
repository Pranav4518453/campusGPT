import { Schema, model } from 'mongoose';

const AnnouncementSchema = new Schema({
  title: String,
  body: String,
  postedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now }
});

export default model('Announcement', AnnouncementSchema);