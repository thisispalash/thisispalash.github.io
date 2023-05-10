import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncUpdate } from '@/models/Post';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {

  const { _id, _title, _editor, _tags } = req.body;

  const _post = {
    _id,
    title: _title ?? 'new b3 post; todo add title support',
    tags: _tags ?? [],
    editor: _editor,
  }
  const post_ = await asyncUpdate(_post);

  if(post_.error) return res.status(500).json({ error: post_.error });
  return res.status(200).json(post_);

});

export default handler;