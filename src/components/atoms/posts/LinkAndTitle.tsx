import { useGlobalContext } from '@/context/GlobalContext';
import { HStack, Icon, Link, Spacer, Text } from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';


export default function LinkAndTitle({ ...props }) {

  let { _id, title, titleClickAction, isHeading } = props;
  if(!titleClickAction) titleClickAction = () => {};

  // @ts-ignore
  const { makeToast } = useGlobalContext();

  const copyPermalink = () => {
    const uri = `https://thisispalash.com/b3/${_id}`;
    navigator.clipboard.writeText(uri);
    makeToast({ code: 200, description: 'Post permalink copied to clipboard!' });
  }

  return(
    <HStack spacing={4} w='full'>
      <Link onClick={copyPermalink}>
        <Icon as={FaLink} fontSize={isHeading? 'md':'sm'} />
      </Link>
      <Text 
        onClick={titleClickAction}
        fontSize={isHeading? 'xl':'md'}
        variant={isHeading? 'heading' : 'clickable'}
      >
        {title}
      </Text>
      <Spacer />
    </HStack>
  )
}