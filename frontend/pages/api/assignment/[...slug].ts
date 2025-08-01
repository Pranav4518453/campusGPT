import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendURL = process.env.BACKEND_URL || 'http://localhost:5000/api';
  const [action, userId] = req.query.slug as string[];
  if (req.method === 'GET' && action === 'user') {
    const assignments = await axios.get(`${backendURL}/assignment/user/${userId}`);
    res.json(assignments.data);
  } else if (req.method === 'POST' && action === 'add') {
    const resp = await axios.post(`${backendURL}/assignment/add`, req.body);
    res.json(resp.data);
  } else {
    res.status(404).end();
  }
}