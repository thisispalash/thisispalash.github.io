import { AspectRatio, Box, Divider, Heading, HStack, Image, Link, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Head from '@/components/Head';
import PostModal from '@/components/PostModal';
import { useEffect, useState } from 'react';
import { Tag } from '@/models/Post';

type Post = {
  _id: string;
  title: string;
  tags: Array<Tag>;
}

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ posts, setPosts ] = useState<Array<Post>>([]);
  const [ postId, setPostId ] = useState<String>('');
  const [ loading, setLoading ] = useState<Boolean>(false);

  const contact = () => {
    onOpen();
  }

  const getTitles = async () => {
    setLoading(true);
    const response = await fetch('/api/b3/get', { method: 'POST' });

    setLoading(false);
  }

  useEffect(() => { getTitles(); }, []);

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

        {/* Content */}
        {posts.length !== 0 &&
          <VStack spacing={4} px={8} w='full'>
            {posts.map( (post, _) => {

              const copyPermalink = () => {
                const uri = `https://thisispalash.com/b3/${post._id}`;
                // TODO : copy to clipboard
                // TODO : display toast
              }

              const readPost = () => { setPostId(post._id); onOpen(); }
              
              return (
                <VStack spacing={4} w='full' key={post._id}>
                  <HStack spacing={4} w='full'>
                    {/* DateTimeDisplay */}
                    {/* Tags */}
                    <Spacer />
                  </HStack>

                  <HStack spacing={4} w='full'>
                    <Link onClick={copyPermalink}>
                      {/* ExternalLinkIcon */}
                    </Link>
                    <Text onClick={readPost}>
                      {post.title}
                    </Text>
                    <Spacer />
                  </HStack>
                </VStack>
              );
            })}
          </VStack>
        }

        {posts.length === 0 &&
          <Text>
            There's no posts published yet.
          </Text>
          // TODO : signup to newsletter.
        }


        <Spacer />

        {/* Footer */}
        <VStack spacing={2} py={8}>
          <Divider px={32} />
          <HStack spacing={8} px={12} textAlign='center'>
            <Spacer />
            <Link href='/kdio' variant='reverse'>
              <Text fontFamily='heading' fontSize='lg'>khaaliDimaag [dot] io</Text>
            </Link>
            <Link href='/b3' variant='reverse'>
              <Text fontFamily='heading' fontSize='lg'>Bedside Blackboard</Text>
            </Link>
            <Spacer />
          </HStack>
        </VStack>

      </VStack>

      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        _id={postId}
      />

    </>
  )
}
