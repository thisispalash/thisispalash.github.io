import { useGlobalContext } from '@/context/GlobalContext';
import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Spinner, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InputWithLabelAndFooter from './atoms/InputWIthLabelAndFooter';

export default function ContactFormModal({ ...props }) {

  const [ to, setTo ] = useState('');
  const [ from, setFrom ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ isSending, setIsSending ] = useState(false);

  // @ts-ignore
  const { makeToast } = useGlobalContext();

  const { isOpen, onClose } = props;
  const { loc } = props;

  const validateForm = () => {

    if(from && subject && message) return true;

    if (from === '') makeToast({ code: 400, description: 'Please enter your email address.' });
    else if (subject === '') makeToast({ code: 400, description: 'Please enter a subject.' });
    else if (message === '') makeToast({ code: 400, description: 'Please enter a message.' });

    return false;
  }

  const clearForm = () => {
    setFrom('');
    setSubject('');
    setMessage('');
  }

  const sendMessage = async () => {
    setIsSending(true);
    if(!validateForm()) return setIsSending(false);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to, from, subject, message })
    });

    // TODO handle response

    switch(response.status) {
      case 200: 
        window.sessionStorage.setItem(to, message);
        makeToast({ code: 200, description: 'Your message was recorded. Thank you for contacting!' });
        break;
      default: makeToast({ code: 500 });
    }

    setIsSending(false);
    onClose();
  }

  useEffect(() => {
    switch(loc) {
      case 'home': setTo('@thisispalash'); break;
      case 'kdio': setTo('@kdio'); break;
      default: setTo('@isthispalash'); break;
    }
  }, [loc]);

  useEffect(() => {
    if(isOpen && window.sessionStorage.getItem(to)) {
      makeToast({ code: 403, description: 'You have already sent a message. Please settle down!' });
      if(from || subject || message) clearForm();
      onClose();
    }
  }, [isOpen]);

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
            <Text fontFamily='heading' color='highlight' fontSize='2xl'>
              Send a Message!
            </Text>
            <Spacer />
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack w='full' spacing={4}>
            <Spacer />
            <InputWithLabelAndFooter
              label='To'
              value={to}
              isDisabled={true}
            />
            <InputWithLabelAndFooter
              label='From'
              value={from}
              isRequired={true}
              changeHandler={(e: any) => setFrom(e.target.value)}
            />
            <InputWithLabelAndFooter
              label='Subject'
              value={subject}
              isRequired={true}
              changeHandler={(e: any) => setSubject(e.target.value)}
            />
            <InputWithLabelAndFooter
              label='Message'
              value={message}
              isRequired={true}
              isTextArea={true}
              changeHandler={(e: any) => setMessage(e.target.value)}
            />
            <Spacer />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button 
            mr={3} mb={8} 
            variant='outline'
            onClick={sendMessage} 
            isDisabled={isSending}
            borderColor='highlight' 
            colorScheme='highlights' 
          >
            {isSending ? <Spinner /> : 'Send'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}