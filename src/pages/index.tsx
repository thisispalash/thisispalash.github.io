import { AspectRatio, Divider, HStack, Image, Link, Spacer, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react';
import Head from '@/components/Head';
import ContactFormModal from '@/components/ContactFormModal';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // @ts-ignore
  const { makeToast } = useGlobalContext();

  const contact = () => {
    onOpen();
  }

  const canaryToast = () => {
    makeToast({ code: 501, title: 'Canary Feature!' });
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
            <Tooltip label='Contact Me' aria-label='Contact Me'>
              <Image src='/images/balli-no-bg.png' alt='thisispalash' onClick={contact} className='cursor-message' />
            </Tooltip>
          </AspectRatio>
          <VStack spacing={2} textAlign='left'>
            <Spacer />
            <Text w='full' fontSize='4xl' fontFamily='heading' fontWeight='semibold' color='highlight'>
              thisispalash{' '}
              <Tooltip label='Spotify' aria-label='Spotify'>
                <Link href='https://open.spotify.com/user/palash96_rox?si=ebe624cfcf7b47b9' isExternal variant='reverse' className='cursor-spotify'>[</Link>
              </Tooltip>
              <Tooltip label='Twitter / X' aria-label='Twitter / X'>
                <Link href='https://twitter.com/kdiodna' isExternal variant='reverse' className='cursor-twitter'>d</Link>
              </Tooltip>
              <Tooltip label='LinkedIn' aria-label='LinkedIn'>
                <Link href='https://linkedin.com/in/isthispalash' isExternal variant='reverse' className='cursor-linkedin'>o</Link>
              </Tooltip>
              <Tooltip label='X / Twitter' aria-label='X / Twitter'>
                <Link href='https://twitter.com/theprimefibber' isExternal variant='reverse' className='cursor-twitter'>t</Link>
              </Tooltip>
              <Tooltip label='Instagram' aria-label='Instagram'>
                <Link href='https://instagram.com/isthispalash' isExternal variant='reverse' className='cursor-instagram'>]</Link>
              </Tooltip>
              {' '}com
            </Text>
            <Text w='full' fontSize='lg'>
              <Tooltip label='GitHub' aria-label='GitHub'>
                <Link href='https://github.com/thisispalash' isExternal className='cursor-github'>Decentralizing</Link>
              </Tooltip>
              {' '}the world, one bit at a time!
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
            <Link href='https://kdio.xyz' variant='reverse'>
              <Text fontFamily='heading' fontSize='lg'>khaaliDimaag [dot] io</Text>
            </Link>
            <Text fontFamily='heading' fontSize='lg' variant='cilckableReverse' onClick={canaryToast}>
              Bedside Blackboard
            </Text>
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
