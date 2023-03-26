import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function Dialog({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleClick = () => navigate('/profile');
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>No address saved yet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Would you like to add it to your profile now?
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={handleClick}>
            Yes
          </Button>
          <Button onClick={onClose} variant="ghost">No, thanks</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Dialog;
