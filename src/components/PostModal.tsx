import { Center, HStack, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LinkAndTitle from '@/components/atoms/posts/LinkAndTitle';
import DateAndTags from '@/components/atoms/posts/DateAndTags';
import { Post, Tag } from '@/models/Post';
import { useGlobalContext } from '@/context/GlobalContext';
import B3Viewer from './atoms/B3Viewer';


export default function PostModal({ ...props }) {
  
  const [ post, setPost ] = useState<Post>();
  const [ loaded, setLoaded ] = useState<Boolean>(false);
  
  const { _post } = props;
  const { isOpen, onClose } = props;

  // @ts-ignore
  const { makeToast } = useGlobalContext();

  const getPost = async (_id: string) => {
    setLoaded(false);
    const response = await fetch('/api/b3/get', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id })
    });

    switch(response.status) {
      case 200: setPost(await response.json()); break;
      default: makeToast({ code: 500 });
    }
    setLoaded(true);
  }

  useEffect(() => { if(_post) getPost(_post._id) }, [_post]);
  useEffect(() => { if(!isOpen) setPost(undefined) }, [isOpen]);

  return(
    <Modal 
      size='80%'
      scrollBehavior='inside'
      closeOnEsc={true}
      closeOnOverlayClick={true}
      isOpen={isOpen} onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent 
        m={24} p={8} 
        minH='80vh' minW='80vw'
        maxH='80vh' maxW='80vw'
        bgColor='bg'
        borderWidth='2px'
        borderStyle='solid'
        borderColor='highlight'
        color='textSecondary'
      >
        <ModalHeader >
          <VStack spacing={2} w='full'>
            <LinkAndTitle
              _id={_post?._id}
              title={_post?.title}
              isHeading
            />
            <DateAndTags
              date={_post?.dateUpdated}
              tags={_post?.tags}
            />
          </VStack>
        </ModalHeader>
        <ModalBody bgGradient='radial(#0f0f0f, #000000)' borderRadius='xl'>
          {!loaded && 
            <Center w='full'>
              <Spinner size='lg' />
            </Center>
          }
          {loaded && post && <B3Viewer _post={post!} />}
        </ModalBody>


      </ModalContent>
    </Modal>
  );
}