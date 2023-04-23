import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // TODO write to MongoDB
  console.log(req.body);

  res.status(200).json({ name: 'John Doe' });
}