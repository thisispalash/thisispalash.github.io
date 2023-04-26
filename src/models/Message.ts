import mongoose from 'mongoose';

export type Message = {
  _id: mongoose.Schema.Types.ObjectId;
  to: string;
  from: string;
  subject: string;
  message: string;
  createdAt: Date;
  sent: boolean;
  replied: boolean;
  ignored: boolean;
}

const MessageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  to: String,
  from: String,
  subject: String,
  message: String,
  createdAt: Date,
  sent: Boolean,
  replied: Boolean,
  ignored: Boolean,
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);


/* Methods (return promises, have to be waited upon) */

export function asyncGet(_id: string) {
  return mongoose.models.Message.findOne({ _id })/*.populate()*/.lean();
}

export function asyncUpdate(_data: Partial<Message>) {
  const { _id, ...data } = _data;
  
  if(_id) return mongoose.models.Message.findOneAndUpdate({ _id }, data, { new: true });
  
  return mongoose.models.Message.create({
    ...data,
    _id: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
    sent: false,
    replied: false,
    ignored: false,
  });
}