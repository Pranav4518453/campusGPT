import express from 'express';
import Assignment from '../models/Assignment';

const router = express.Router();

// Add assignment
router.post('/add', async (req, res) => {
  const { title, dueDate, userId } = req.body;
  const assignment = await Assignment.create({ title, dueDate, user: userId });
  res.json(assignment);
});

// List assignments for a user
router.get('/user/:userId', async (req, res) => {
  const assignments = await Assignment.find({ user: req.params.userId });
  res.json(assignments);
});

export default router;