import dynamic from 'next/dynamic';
import { memo, useEffect, useRef, useState } from 'react';

import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { type EditorProps } from './posts/Editor';
import { Box } from '@chakra-ui/react';

const Editor = dynamic(() => import('./posts/Editor'), { ssr: false });

export default function B3Editor({ isViewer }: EditorProps) {

  return(
    <Box w='80vw' py={12}>
      <Prose>
        <Editor isViewer={isViewer} />
      </Prose>
    </Box> 
  );
}