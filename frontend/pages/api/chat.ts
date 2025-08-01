import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const { message } = req.body;
  const backendURL = process.env.BACKEND_URL || 'http://localhost:5000/api';
  const reply = await axios.post(`${backendURL}/chat`, { message });
  res.json({ reply: reply.data.reply });
}