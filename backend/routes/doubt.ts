import express from 'express';
import { askDoubt } from '../services/aiService';

const router = express.Router();

router.post('/', async (req, res) => {
  const { question, fileUrl } = req.body;
  // If file is present, OCR it first (not shown here)
  const answer = await askDoubt(question);
  res.json({ answer });
});

export default router;