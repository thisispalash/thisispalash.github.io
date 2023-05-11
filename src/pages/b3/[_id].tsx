import Head from '@/components/Head';
import B3Viewer from '@/components/atoms/B3Viewer';
import DateAndTags from '@/components/atoms/posts/DateAndTags';
import LinkAndTitle from '@/components/atoms/posts/LinkAndTitle';
import { Post } from '@/models/Post';
import { Spinner, VStack } from '@chakra-ui/react';
import { GetServerSidePropsContext } from 'next';

export type PostReaderProps = {
  post: Post; // @dev JSON.stringify(Post)
}

export default function Home({ post }: PostReaderProps) {

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

      {/* Footer TODO */}

      {/* Message Button */}

      {/* Go to B3 link */}
    </>

  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const { _id } = context.query;

  const query = await fetch('http://localhost:3000/api/b3/get', {
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