import dynamic from 'next/dynamic';

import { Box, VStack } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { type EditorProps } from './posts/Editor';
import InputWithLabelAndFooter from './InputWIthLabelAndFooter';

const Editor = dynamic(() => import('./posts/Editor'), { ssr: false });

export type B3EditorProps = EditorProps & 
  {
    title: String;
    titleHandler: (title: String) => void;
  }

export default function B3Editor({ ...props }: B3EditorProps) {

  return(
    <VStack w='80vw' py={6} spacing={4}>
      <InputWithLabelAndFooter
        bg='bg'
        label='Title'
        isRequired={true}
        value={props.title}
        changeHandler={(e: any) => props.titleHandler(e.target.value) }
      />
      <Prose>
        <Editor {...props} />
      </Prose>
    </VStack> 
  );
}