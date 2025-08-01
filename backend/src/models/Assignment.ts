import { Schema, model } from 'mongoose';

const AssignmentSchema = new Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default model('Assignment', AssignmentSchema);