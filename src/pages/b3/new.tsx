import Head from '@/components/Head';
import { useEffect, useState } from 'react';
import B3Editor from '@/components/atoms/B3Editor';
import { OutputData } from '@editorjs/editorjs/types';

import SigninModal from '@/components/SigninModal';
import { Button, Divider, HStack, Heading, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react';

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [ hasAccess, setHasAccess ] = useState<Boolean>(false);
  const [ post, setPost ] = useState<OutputData | null>(null);

  useEffect(() => { if(!hasAccess) onOpen(); }, []);
  useEffect(() => { console.log(post); }, [post]);

  const savePost = () => {
    if(!post) return;

    fetch('/api/b3/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _editor: post })
    });
  }

  const postChanged = (data: OutputData) => {
    console.log('post changed');
    console.log(data);
  }

  return(
    <>
      <Head page='b3' />

      {hasAccess &&
        <VStack spacing={4} h='100vh' w='100vw' p={12}>
          <HStack w='100%' justifyContent='space-between' px={12}>
            <Spacer />
            <Heading size='lg' fontFamily='heading' color='highlight'>
              Create New Post | B<sup>3</sup> 
            </Heading>
            <Spacer />
            <Button 
              variant='outline' 
              colorScheme='highlights' 
              onClick={savePost}
              isDisabled={!post}
            >
              Publish
            </Button>
          </HStack>
          <Divider />
          <B3Editor 
            isViewer={false} 
            _post={post ?? undefined}
            changeHandler={setPost}
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