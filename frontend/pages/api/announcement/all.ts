import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const backendURL = process.env.BACKEND_URL || 'http://localhost:5000/api';
  const anns = await axios.get(`${backendURL}/announcement/all`);
  res.json(anns.data);
}