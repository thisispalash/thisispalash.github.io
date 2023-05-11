import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import dbConnect from '@/db';
import { asyncAccessExists } from '@/models/Writer';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.use(async (req, res, next) => {
  await dbConnect();
  next();
});

handler.post(async (req, res) => {

  const { name, password } = req.body;
  if(!name || !password) return res.status(400).json({ error: 'name and password required!' });

  const exists = await asyncAccessExists(name, password);
  if(!exists) return res.status(401).json({ error: 'Invalid name or password' });
  return res.status(200).json({ user: exists._id });
});

export default handler;

// TODO : https://security.stackexchange.com/questions/244812/encryption-decryption-at-client-or-server-side-with-hybrid-cryptosystem