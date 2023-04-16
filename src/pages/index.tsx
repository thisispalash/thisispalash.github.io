import Head from '@/components/Head';
import { AspectRatio, Divider, HStack, Image, Link, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
import ContactFormModal from '@/components/ContactFormModal';

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const contact = () => {
    onOpen();
  }

  return (
    <>
      <Head page='index' />

      <VStack spacing={4} h='100vh' w='100vw' px={12}>
        <Spacer />

        {/* Content */}
        <HStack spacing={8} px={12} py={12} w='full'>
          <Spacer />
          <AspectRatio ratio={1} w='225px' h='225px'>
            <Image src='/images/memoji.png' alt='thisispalash' onClick={contact} />
          </AspectRatio>
          <VStack spacing={2} textAlign='left'>
            <Spacer />
            <Text w='full' fontSize='4xl' fontFamily='heading' fontWeight='semibold' color='highlight'>
              thisispalash [
              <Link href='https://twitter.com/kdiodna' isExternal variant='reverse'>d</Link>
              <Link href='https://linkedin.com/in/isthispalash' isExternal variant='reverse'>o</Link>
              <Link href='https://twitter.com/theprimefibber' isExternal variant='reverse'>t</Link>
              ] com
            </Text>
            <Text w='full' fontSize='lg'>
              Decentralizing the world,{' '}
              <Link href='https://github.com/thisispalash' isExternal>one Byte</Link>
              {' '}at a time!
            </Text>
            <Spacer />
          </VStack>
          <Spacer />
        </HStack>

        {/* <Spacer /> */}

        {/* Footer */}
        <VStack spacing={2} py={8}>
          <Divider px={32} />
          <HStack spacing={8} px={12} textAlign='center'>
            <Spacer />
            <Link href='/kdio'>
              <Text fontFamily='heading' fontSize='lg'>khaaliDimaag [dot] io</Text>
            </Link>
            <Link href='/b3'>
              <Text fontFamily='heading' fontSize='lg'>Bedside Blackboard</Text>
            </Link>
            <Spacer />
          </HStack>
        </VStack>

        <Spacer />
      </VStack>

      <ContactFormModal 
        isOpen={isOpen}
        onClose={onClose}
        loc='home'
      />
    </>
  )
}
