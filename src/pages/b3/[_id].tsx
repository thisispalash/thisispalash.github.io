import ContactFormModal from '@/components/ContactFormModal';
import Head from '@/components/Head';
import B3Viewer from '@/components/atoms/B3Viewer';
import DateAndTags from '@/components/atoms/posts/DateAndTags';
import LinkAndTitle from '@/components/atoms/posts/LinkAndTitle';
import { Post } from '@/models/Post';
import { Button, ButtonGroup, Icon, Link, Spinner, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';
import { FaArrowLeft, FaRegCommentAlt } from 'react-icons/fa';

export type PostReaderProps = {
  post: Post; // @dev JSON.stringify(Post)
}

export default function Home({ post }: PostReaderProps) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return(

    <>
      <Head page='b3' />

      <VStack spacing={8} w='100vw' h='100vh' p={12}>
        {!post && <Spinner />}
        {post && <>
          <VStack spacing={2} w='70%' px={12}>
            <LinkAndTitle
              _id={post._id}
              title={post.title}
              isHeading={true}
            />
            <DateAndTags
              date={post.dateUpdated}
              tags={post.tags}
              isHeading={true}
            />
          </VStack>
          <B3Viewer _post={post} />
        </>}
      </VStack>

      {/* Go to B3 link */}
      

      {/* Message Button */}
        <Button 
          size='lg' 
          zIndex={9}
          variant='outline' 
          position='fixed' 
          borderRadius='full'
          bottom={12} right={12} 
          colorScheme='highlights'
          onClick={onOpen}
        >
          <Icon as={FaRegCommentAlt} />
        </Button>
        <Button 
          size='lg' 
          zIndex={9}
          variant='outline' 
          position='fixed' 
          borderRadius='full'
          bottom={12} left={12} 
          colorScheme='highlights'
          onClick={() => window.open('/b3', '_self')}
        >
          <Text fontFamily='heading' fontSize='lg'>
            B<sup>3</sup>
          </Text>
        </Button>

      <ContactFormModal
        loc='b3'
        isOpen={isOpen}
        onClose={onClose}
        post_id={post?._id}
      />
    </>

  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const { _id } = context.query;
  
  // @dev TODO make url dependent on environment
  const url = 'https://thisispalash.com/api/b3/get';

  const query = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id })
  });

  if(query.status !== 200) {
    console.log('post not found:', _id);
    return { redirect: { permanent: true, destination: '/404' } };
  }
  
  return { props: { post: await query.json() } };
}