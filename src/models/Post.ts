import mongoose from 'mongoose';

export type Tag = {
  name: string;
} // TODO : a Tag collection with pointers to posts

export type Post = {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  mkdown: string;
  dateCreated: Date;
  tags: Array<Tag>
  dateUpdated: Date;
  responses: number;
  version: number;
}

const PostSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  mkdown: String,
  tags: Array<Tag>,
  dateCreated: Date,
  dateUpdated: Date,
  responses: Number,
  version: Number,
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);


/* Methods (return promises, have to be waited upon) */

export function asyncGetById(_id: string) {
  return mongoose.models.Post.findOne({ _id }).lean();
}

export function asyncGetAll() {
  return mongoose.models.Post.find({}, '-mkdown').sort('-dateUpdated').lean();
}

export function asyncFilterByTags(tags: Tag[] | string[]) {
  // TODO
}

export function asyncUpdate(_data: Partial<Post>) {
  const { _id, title, mkdown, tags, ...data } = _data;
  
  if(_id) return mongoose.models.Post.findOneAndUpdate({ _id }, { title, mkdown, tags }, { new: true });
  
  const datetime = new Date();

  return mongoose.models.Post.create({
    title, mkdown, tags,
    _id: new mongoose.Types.ObjectId(),
    dateCreated: datetime,
    dateUpdated: datetime,
    responses: 0,
    version: 0,
  });
}