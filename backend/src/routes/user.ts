import express from 'express';
import User from '../models/User';

const router = express.Router();

// Get current user profile
router.get('/me', async (req, res) => {
  // Assume req.user is set via auth middleware
  const user = await User.findById(req.user.id);
  res.json(user);
});

export default router;