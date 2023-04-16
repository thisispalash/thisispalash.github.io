import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function ContactFormModal({ ...props }) {

  const [ to, setTo ] = useState('');
  const [ from, setFrom ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ message, setMessage ] = useState('');

  const { isOpen, onClose } = props;
  const { loc } = props;

  useEffect(() => {
    switch(loc) {
      case 'home': setTo('@thisispalash'); break;
      case 'kdio': setTo('@kdio'); break;
      default: setTo('@isthispalash'); break;
    }
  }, [loc]);

  // TODO: design contact form, connect backend

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/*  TODO */}
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Modal Body</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}