import express from 'express';
import User from '../models/User';
import { parseTimetable } from '../services/timetableService';

const router = express.Router();

// Upload timetable (text or file, only text for now)
router.post('/upload', async (req, res) => {
  const { text, userId } = req.body;
  const timetable = await parseTimetable(text);
  await User.findByIdAndUpdate(userId, { timetable });
  res.json({ timetable });
});

export default router;