import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncGetAll } from '@/models/Post';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {
  const posts = await asyncGetAll();

  // @ts-ignore
  if(posts.error) return res.status(500).json({ error: posts.error });
  return res.status(200).json(posts);
});

export default handler;