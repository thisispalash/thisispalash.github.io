import Head from '@/components/Head';
import { useEffect, useState } from 'react';
import Editor from 'rich-markdown-editor';

import SigninModal from '@/components/SigninModal';
import { Button, Divider, HStack, Heading, Text, VStack, useDisclosure } from '@chakra-ui/react';

export default function Home() {

  const [ hasAccess, setHasAccess ] = useState<Boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => { if(!hasAccess) onOpen(); }, []);



  return(
    <>
      <Head page='b3' />

      {hasAccess &&
        <VStack spacing={4} h='100vh' w='100vw' p={12}>
          {/* <Spacer /> */}
          <Heading size='lg' fontFamily='heading' color='highlight'>
            Bedside Blackboard | Create New Post
          </Heading>
          {/* TODO Drafts */}
          <Divider />

          <Editor 
          
          />
        </VStack>
      }

      {!hasAccess &&
        <VStack spacing={4} h='100vh' w='100vw' p={12}>
          <Text>You need access to write a new post for /b3.</Text>
          <Button onClick={onOpen} variant='outline' colorScheme='highlights'>Sign in</Button>
        </VStack>
      }


      <SigninModal 
        toggler={setHasAccess} 
        isOpen={isOpen} onClose={onClose}
      />
    </>
  );
}