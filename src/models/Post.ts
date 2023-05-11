import mongoose from 'mongoose';
import type { OutputBlockData } from '@editorjs/editorjs/types';

export type Tag = {
  name: string;
} // TODO : a Tag collection with pointers to posts

export type Post = {
  _id: mongoose.Schema.Types.ObjectId | string;
  title: string;
  blocks: OutputBlockData[];
  dateCreated: Date;
  tags: Array<Tag>
  dateUpdated: Date;
  responses: number;
  version: number;
  author: mongoose.Schema.Types.ObjectId | string;
  editor: any; // @dev TODO
}

const PostSchema = new mongoose.Schema<Post>({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  blocks: Array<OutputBlockData>,
  tags: Array<Tag>,
  dateCreated: Date,
  dateUpdated: Date,
  responses: Number,
  version: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Writer' },
  editor: { type: Object, default: {} },
  // editor: { type: mongoose.Schema.Types.ObjectId, ref: 'Editor' },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);


/* Methods (return promises, have to be waited upon) */

export function asyncGetById(_id: string) {
  return mongoose.models.Post.findOne({ _id }).lean();
}

export function asyncGetAll() {
  return mongoose.models.Post.find().sort('-dateUpdated').lean();
}

export function asyncFilterByTags(tags: Tag[] | string[]) {
  // TODO
}

export function asyncUpdate( _data: Partial<Post>) {
  const { _id, title, tags, editor, ...data } = _data;
  
  if(_id) { // post already exists
    return mongoose.models.Post.findOneAndUpdate(
      { _id }, 
      { 
        title, tags, 
        blocks: editor.blocks, 
        dateUpdated: editor.time, 
        editor: { __v: editor.version, kind: '@editorjs' },
        $inc: { version: 1 } 
      },
      { new: true }
    );
  }

  return mongoose.models.Post.create({
    title, tags,
    blocks: editor.blocks,
    dateCreated: editor.time,
    dateUpdated: editor.time,
    author: data.author ?? '644ff7866ee8c426233f9bb4',
    responses: 0,
    version: 0,
    editor: { __v: editor.version, kind: '@editorjs' },
    _id: new mongoose.Types.ObjectId(),
  });
}