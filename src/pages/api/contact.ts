import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncUpdate } from '@/models/Message';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {
  const storeMessage = await asyncUpdate(req.body);

  if(storeMessage.error) return res.status(500).json({ error: storeMessage.error });
  return res.status(200).json(storeMessage);
});

export default handler;