import express from 'express';
import { askDoubt } from '../services/aiService';

const router = express.Router();

router.post('/', async (req, res) => {
  const { question } = req.body;
  const answer = await askDoubt(question);
  res.json({ answer });
});

export default router;