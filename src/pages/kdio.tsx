import { AspectRatio, Center, Divider, HStack, Icon, Image, Link, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react';
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis posuere gravida. Mauris libero nisi, blandit vitae tellus id, molestie congue nulla. Praesent semper nisl at tellus elementum efficitur. Donec quis erat purus. Donec ornare at sapien vel cursus. Nunc nec pellentesque odio. Nam neque justo, venenatis eget metus a, ornare auctor ex. Praesent et dignissim nisl.
              </Text>
              <Text px={8}>
                Mauris vel leo arcu. Maecenas eleifend auctor posuere. Maecenas eget tellus et nisl dapibus facilisis vitae ut eros. Curabitur enim arcu, tempus vitae mauris eget, rutrum ultricies massa. Donec eget pulvinar justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet sem placerat, fermentum turpis quis, feugiat augue. Donec eget vestibulum arcu, vel porttitor ipsum. Donec malesuada, urna eu dapibus maximus, nibh dolor tincidunt massa, non elementum quam lacus a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet urna mauris, at scelerisque turpis lobortis porttitor.
              </Text>
              <Text px={8}>
                Mauris vel leo arcu. Maecenas eleifend auctor posuere. Maecenas eget tellus et nisl dapibus facilisis vitae ut eros. Curabitur enim arcu, tempus vitae mauris eget, rutrum ultricies massa. Donec eget pulvinar justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet sem placerat, fermentum turpis quis, feugiat augue. Donec eget vestibulum arcu, vel porttitor ipsum. Donec malesuada, urna eu dapibus maximus, nibh dolor tincidunt massa, non elementum quam lacus a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet urna mauris, at scelerisque turpis lobortis porttitor.
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
