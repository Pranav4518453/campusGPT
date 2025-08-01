import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const backendURL = process.env.BACKEND_URL || 'http://localhost:5000/api';
  const items = await axios.get(`${backendURL}/lostfound/all`);
  res.json(items.data);
}