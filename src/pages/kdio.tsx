import { AspectRatio, Center, Divider, HStack, Icon, Image, Link, Spacer, Text, Tooltip, useDisclosure, VStack } from '@chakra-ui/react';
import { FaArrowLeft, FaLocationArrow } from 'react-icons/fa';
import Head from '@/components/Head';
import ContactFormModal from '@/components/ContactFormModal';

export default function Kdio() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const contact = () => {
    onOpen();
  }

  return (
    <>
      <Head page='kdio' />

      <VStack bg='bgGradient'>
        

        {/* Landing Section */}
        
        <VStack spacing={4} h='100vh' w='full' px={12}>
          <Spacer />

          {/* Content */}
          <HStack spacing={12} py={12} w='full'>
            <Spacer />
            <VStack spacing={2} textAlign='left'>
              <Spacer />
              <Text w='full' fontSize='4xl' fontFamily='heading' fontWeight='semibold' color='highlight'>
                khaaliDimaag [dot] io
              </Text>
              <Spacer />
              <Text w='full' fontSize='lg' noOfLines={2}>
                operating between the two ends of the spectrum, <br />
                from only the brain, to the empty brain
              </Text>
              <Text w='full' fontSize='lg'>
              </Text>
              <Spacer />
            </VStack>
            <AspectRatio ratio={1} w='240px' h='180px'>
              <Image src='/images/kdio.png' alt='thisispalash' onClick={contact} cursor='pointer'/>
            </AspectRatio>
            <Spacer />
          </HStack>


          <Spacer />
        </VStack>


        
        {/* Info Section and Links */}
        
        <VStack spacing={4} h='100vh' w='full' px={12}>
          <Spacer />

          <HStack spacing={12} px={12} py={12} w='full'>
            <Spacer />  
            <VStack spacing={4} px={12} w='full' textAlign='justify' fontSize='lg'>
              <Text px={8}>
                khaaliDimaag is an ambitious idea that hopes to create a second brain for every human in the hope of providing the best of human technology to all of humanity. A secondary goal is to create virtual backups of the self so as to avoid (or at least delay) the <Tooltip label='refers to the idea that the first death is physical and second, when one is forgotten'>second death</Tooltip>.
              </Text>
              <Text px={8}>
                khaaliDimaag is a conjunction of two hindi words - khaali and dimaag - joined together in camelCase. 'dimaag' typically refers to the brain or the mind, and is loosely interchangable between the organ and the conscious self. 'khaali' can mean 'only' or 'empty' depending on the context. 
              </Text>
              <Text px={8}>
                'khaaliDimaag' thus is a play on the two words to mean 'only the brain' or 'empty brain'. It then helps to refer to the idea of only [it] being the brain so you can <Tooltip label='And experience life to the fullest!'>be an empty brain!</Tooltip>
              </Text>
            </VStack>
            <Spacer />
          </HStack>

          <Spacer />
          
          {/* Footer */}
          <Center w='full' px={12}>
            <VStack spacing={2} py={12} w='90%'>
              <Divider />
              <HStack spacing={8} px={2} w='full' textAlign='center'>
                <Link href='/' variant='reverse'>
                  <Text fontFamily='heading' fontSize='lg'>
                    <Icon as={FaArrowLeft} fontSize='md' /> Go Back
                  </Text>
                </Link>
                <Spacer />
                <Link href='https://kdio.xyz' variant='reverse' isExternal>
                  <Text fontFamily='heading' fontSize='lg'>
                    Visit kdio <Icon as={FaLocationArrow} fontSize='md' />  
                  </Text>
                </Link>
              </HStack>
            </VStack>
          </Center>
      
        </VStack>
      
      
      
      
      </VStack>


      <ContactFormModal 
        isOpen={isOpen}
        onClose={onClose}
        loc='kdio'
      />
    </>
  )
}
