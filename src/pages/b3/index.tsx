import { AspectRatio, Box, Button, Divider, Heading, HStack, Icon, Image, Input, Link, Spacer, Spinner, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Head from '@/components/Head';
import PostModal from '@/components/PostModal';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';
import { Tag } from '@/models/Post';
import { FaArrowLeft } from 'react-icons/fa';
import LinkAndTitle from '@/components/atoms/posts/LinkAndTitle';
import DateAndTags from '@/components/atoms/posts/DateAndTags';

type Post = {
  _id: string;
  title: string;
  tags: Array<Tag>;
  dateCreated: Date | string;
  dateUpdated: Date | string;
  responses: number;
  version: number;
}

export default function Home() {

  const [ posts, setPosts ] = useState<Array<Post>>([]);
  const [ postId, setPostId ] = useState<String>('');
  const [ loaded, setLoaded ] = useState<Boolean>(false);
  const [ email, setEmail ] = useState<String>('');
  const [ resgistred, setRegistered ] = useState<Boolean>(false);

  // @ts-ignore
  const { makeToast } = useGlobalContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getTitles = async () => {
    setLoaded(false);
    const response = await fetch('/api/b3/get', { method: 'POST' });

    console.log(response)

    switch(response.status) {
      case 200: setPosts(await response.json()); break;
      default: console.log('error'); makeToast({ code: 500 });
    }

    setLoaded(true);
  }

  const signup = async () => {
    const response = await fetch('/api/b3/signup', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    switch(response.status) {
      case 200: setRegistered(true); makeToast({ code: 200 }); break;
      default: makeToast({ code: 500 });
    }
  }

  const filter = async () => {
    setLoaded(false);
    // TODO: implement filtering posts
    setLoaded(true);
  }

  useEffect(() => { getTitles(); }, []);
  useEffect(() => { if(postId) onOpen(); }, [postId]);
  useEffect(() => { if(!isOpen) setPostId(''); }, [isOpen]);

  return (
    <>
      <Head page='b3' />

      <VStack spacing={4} h='100vh' w='100vw' p={12}>
        {/* <Spacer /> */}

        <Heading size='lg' fontFamily='heading' color='highlight'>
          Bedside Blackboard
        </Heading>

        <Divider w='full' mx={12} />

        <Spacer />

        {!loaded && <Spinner size='xl' />}

        {/* Content */}
        {loaded && posts.length !== 0 &&
          <VStack 
            spacing={4} 
            px={8} w='full' h='full' 
            overflowX='scroll'
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            {posts.map( (post, _) => {
              
              return (
                <VStack spacing={4} w='full' key={post._id}>
                  <DateAndTags
                    date={post.dateUpdated}
                    tags={post.tags}
                  />
                  <LinkAndTitle 
                    _id={post._id}
                    title={post.title}
                    titleClickAction={() => setPostId(post._id)}
                  />
                </VStack>
              );
            })}
          </VStack>
        }

        {loaded && posts.length === 0 &&
          <VStack spacing={6} px={8} w='full'>
            <Text>
              There are no posts published yet.
            </Text>

            {/* Sign up to b3 */}
            {/* TODO */}
            {!resgistred &&
              <HStack spacing={4} w='50%'>
                <Input 
                  isDisabled
                  type='text' 
                  fontSize='sm'
                  variant='outline'
                  focusBorderColor='highlight'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Receive an email when there is a new post?'
                />
                <Button variant='outline' size='sm' colorScheme='highlights' onClick={signup} isDisabled>
                  Sign Up!
                </Button>
              </HStack>
            }
          </VStack>
        }



        <Spacer />

        {/* Footer */}
        <HStack spacing={8} px={12} textAlign='center' w='full'>
          <Link href='/' variant='reverse'>
            <Text fontFamily='heading' fontSize='lg'>
              <Icon as={FaArrowLeft} fontSize='md' /> Go Back
            </Text>
          </Link>
          <Spacer />
          <Button variant='ghost' colorScheme='highlights' onClick={filter} isDisabled>

          </Button>
        </HStack>

      </VStack>

      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        _id={postId}
      />

    </>
  )
}
