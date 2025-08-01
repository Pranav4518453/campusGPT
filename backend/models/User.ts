import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ['student', 'faculty', 'admin'], default: 'student' },
  interests: [String],
  timetable: Object, // JSON structure
  assignments: [{
    title: String,
    dueDate: Date,
    completed: Boolean
  }]
});

export default model('User', UserSchema);