import mongoose from 'mongoose';

export type Access = {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  password: string;
}

const AccessSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  password: String,
});

export default mongoose.models.Access || mongoose.model('Access', AccessSchema);

export function asyncAccessExists(name: string, password: string) {
  return mongoose.models.Access.exists({ name, password });
}