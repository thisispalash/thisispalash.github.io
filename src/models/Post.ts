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


/* Methods */

export async function asyncGetById(_id: string) {
  return mongoose.models.Post.findOne({ _id }).lean();
}

export async function asyncGetAll() {
  // returns only _id, createdAt, updatedAt and title
}

export async function asyncFilterByTags(tags: Tag[] | string[]) {

}

export async function asyncUpdate(_data: Partial<Post>) {

}