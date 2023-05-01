import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncNewSignup, asyncConfirmSignup, asyncToggleActiveStatus } from '@/models/Signup';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {

  const { _id, action } = req.body;

  let resp;

  switch(action) {
    case 'create': resp = await asyncNewSignup(req.body, 'b3'); break;
    case 'confirm': resp = await asyncConfirmSignup(_id); break;
    case 'toggle': resp = await asyncToggleActiveStatus(_id);
    default: return res.status(400).json({ error: 'Invalid action' });
  }

  if(resp.error) return res.status(500).json({ error: resp.error });
  return res.status(200).json(resp);

});

export default handler;