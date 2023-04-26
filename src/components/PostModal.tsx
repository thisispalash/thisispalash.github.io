import { HStack, Link, Modal, ModalContent, ModalOverlay, Spacer, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LinkAndTitle from '@/components/atoms/posts/LinkAndTitle';
import DateAndTags from '@/components/atoms/posts/DateAndTags';
import MarkdownViewer from '@/components/atoms/MarkdownViewer';
import { Tag } from '@/models/Post';

type Post = {
  _id: string;
  title: string;
  mkdown: string;
  tags: Array<Tag>;
  dateCreated: Date | string;
  dateUpdated: Date | string;
  responses: number;
  version: number;
}

export default function PostModal({ ...props }) {
  
  const [ post, setPost ] = useState<Post>();
  
  const { _id } = props;
  const { isOpen, onClose } = props;


  const getPost = async (_id: string) => {
    const response = await fetch('/api/b3/get', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id })
    });

    switch(response.status) {
      case 200: setPost(await response.json()); break;
      default: console.log('error');
    }
  }

  useEffect(() => {
    if(_id) getPost(_id);
  }, [_id]);

  return(
    <Modal isOpen={isOpen} onClose={onClose} size='full'>
      <ModalOverlay />
      <ModalContent p={6} w='full' h='full'>
        <VStack spacing={6} w='full' h='full'>
          <VStack spacing={2} w='full'>
            <LinkAndTitle
              _id={post?._id}
              title={post?.title}
            />
            <DateAndTags
              date={post?.dateUpdated}
              tags={post?.tags}
            />
          </VStack>
          <MarkdownViewer mkdown={post?.mkdown} />
          <Spacer />
        </VStack>
      </ModalContent>
    </Modal>
  );
}