import express from 'express';
import { askDoubt } from '../services/aiService';

const router = express.Router();

// General chat endpoint
router.post('/', async (req, res) => {
  const { message } = req.body;
  const reply = await askDoubt(message);
  res.json({ reply });
});

export default router;