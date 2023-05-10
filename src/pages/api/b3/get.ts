import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncGetById, asyncGetAll } from '@/models/Post';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {

  const { _id } = req.body;
  
  if(_id) {
    const post = await asyncGetById(_id);
    // @ts-ignore
    if(post.error) return res.status(500).json({ error: post.error });
    return res.status(200).json(post);
  }
  
  const posts = await asyncGetAll();
  // @ts-ignore
  if(posts.error) return res.status(500).json({ error: posts.error });
  return res.status(200).json(posts);
});

export default handler;