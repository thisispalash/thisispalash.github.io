import dynamic from 'next/dynamic';

import { Box } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { type EditorProps } from './posts/Editor';
import { Post } from '@/models/Post';
import { type OutputData } from '@editorjs/editorjs';

const Editor = dynamic(() => import('./posts/Editor'), { ssr: false });

export type ViewerProps = {
  _post: Post;
}

export default function B3Viewer({ _post }: ViewerProps) {

  const timestamp: Date = _post.version? _post.dateUpdated : _post.dateCreated;

  const _data: OutputData = {
    time: timestamp.valueOf(),
    blocks: _post.blocks,
    version: _post.editor?.__v
  }

  return(
    <Box w='full' py={2}>
      <Prose>
        <Editor isViewer={true} _post={_data} />
      </Prose>
    </Box> 
  );
}