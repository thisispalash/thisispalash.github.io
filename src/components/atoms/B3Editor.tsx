import dynamic from 'next/dynamic';

import { Box } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { type EditorProps } from './posts/Editor';

const Editor = dynamic(() => import('./posts/Editor'), { ssr: false });

export default function B3Editor({ ...props }: EditorProps) {

  return(
    <Box w='80vw' py={12}>
      <Prose>
        <Editor {...props} />
      </Prose>
    </Box> 
  );
}