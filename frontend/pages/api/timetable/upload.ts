import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  const backendURL = process.env.BACKEND_URL || 'http://localhost:5000/api';
  const parse = await axios.post(`${backendURL}/timetable/upload`, req.body);
  res.json(parse.data);
}