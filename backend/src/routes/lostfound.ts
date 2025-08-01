import express from 'express';
import LostFound from '../models/LostFound';

const router = express.Router();

// Post lost/found item
router.post('/post', async (req, res) => {
  const { image, description, location, postedBy } = req.body;
  // AI Vision tagging can be added here
  const tags: string[] = []; // Placeholder for vision API
  const entry = await LostFound.create({ image, description, location, postedBy, tags });
  res.json(entry);
});

// Get all lost/found items
router.get('/all', async (_req, res) => {
  const items = await LostFound.find().sort({ date: -1 });
  res.json(items);
});

export default router;