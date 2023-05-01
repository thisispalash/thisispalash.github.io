import { useEffect, useState } from 'react';
import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Spinner, Text, VStack } from '@chakra-ui/react';
import { useGlobalContext } from '@/context/GlobalContext';
import InputWithLabelAndFooter from '@/components/atoms/InputWIthLabelAndFooter';
import { createHmac } from 'crypto';

export default function SigninModal({ ...props }) {

  const [ name, setName ] = useState('');
  const [ pass, setPass ] = useState('');
  const [ isSending, setIsSending ] = useState(false);

  const [ bgModal, setBgModal ] = useState('bg');
  const [ bgInput, setBgInput ] = useState('bgSecondary');
  const [ buttonScheme, setButtonScheme ] = useState('highlights');

  // @ts-ignore
  const { makeToast } = useGlobalContext();

  const { isOpen, onClose, toggler } = props;

  const validateForm = () => {

    if(name && pass) return true;

    if (name === '') makeToast({ code: 400, description: 'Please enter the name.' });
    else if (pass === '') makeToast({ code: 400, description: 'Please enter the password.' });

    return false;
  }

  const clearForm = () => { setName(''); setPass(''); }

  const checkAccess = async () => {
    if(!validateForm()) return;
    setIsSending(true);
    const _h = createHmac('sha256', pass).update(name).digest('hex');
    const response = await fetch('/api/b3/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password: _h })
    });

    switch(response.status) {
      case 200: 
        window.sessionStorage.setItem('writer', (await response.json()).user);
        makeToast({ code: 200, description: 'Successfully signed in.' }); 
        toggler(true); onClose(); break;
      case 401: makeToast({ code: 401, description: 'Name/Password combination not found!' }); break;
      default: makeToast({ code: 500 });
    }

    setIsSending(false);
  }

  useEffect(() => { if(!isOpen) clearForm(); }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={false} closeOnOverlayClick={true}>
      <ModalOverlay />
      <ModalContent 
        bgColor='bg'
        borderStyle='solid'
        borderColor='highlight'
        borderWidth='2px'
        color='textSecondary'
      >
        <ModalHeader mt={6} ml={4}>
          <HStack spacing={4} w='full'>
            <Text fontFamily='heading' color='highlight' fontSize='xl'>
              Sign in to continue..
            </Text>
            <Spacer />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack w='full' spacing={4}>
            <Spacer />
            <InputWithLabelAndFooter
              label='Name'
              value={name}
              bg='bgSecondary'
              isRequired={true}
              changeHandler={(e: any) => setName(e.target.value)}
            />
            <InputWithLabelAndFooter
              label='Password'
              type='password'
              value={pass}
              bg='bgSecondary'
              isRequired={true}
              changeHandler={(e: any) => setPass(e.target.value)}
            />
            <Spacer />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button 
            mr={3} mb={8} 
            variant='outline'
            onClick={checkAccess} 
            isDisabled={isSending}
            borderColor='highlight' 
            colorScheme='highlights'
          >
            {isSending ? <Spinner /> : 'Submit'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}