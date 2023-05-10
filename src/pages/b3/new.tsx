import Head from '@/components/Head';
import { useEffect, useState } from 'react';
import B3Editor from '@/components/atoms/B3Editor';

import SigninModal from '@/components/SigninModal';
import { Button, Divider, HStack, Heading, Spacer, Text, VStack, useDisclosure } from '@chakra-ui/react';

export default function Home() {

  const [ hasAccess, setHasAccess ] = useState<Boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => { if(!hasAccess) onOpen(); }, []);

  const savePost = () => {
    // TODO
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
            <Button variant='outline' colorScheme='highlights' onClick={savePost}>Publish</Button>
          </HStack>
          <Divider />
          <B3Editor isViewer={false} />
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