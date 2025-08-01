import express from 'express';
import User from '../models/User';

const router = express.Router();

// Find peers with similar interests
router.post('/find', async (req, res) => {
  const { userId, interests } = req.body;
  const peers = await User.find({
    _id: { $ne: userId },
    interests: { $in: interests }
  }).limit(10);
  res.json(peers);
});

export default router;