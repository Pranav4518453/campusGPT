import express from 'express';
import Announcement from '../models/Announcement';

const router = express.Router();

// Post announcement (admin/faculty only)
router.post('/post', async (req, res) => {
  const { title, body, postedBy } = req.body;
  const announcement = await Announcement.create({ title, body, postedBy });
  res.json(announcement);
});

// Get all announcements
router.get('/all', async (_req, res) => {
  const announcements = await Announcement.find().sort({ date: -1 });
  res.json(announcements);
});

export default router;