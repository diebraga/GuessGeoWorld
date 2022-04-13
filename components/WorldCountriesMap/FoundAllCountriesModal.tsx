import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Confetti } from '../Confetti'
import { GiReturnArrow } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

type FoundAllCountriesModalProps = {
  isOpen: boolean
  onClose: () => void
  onRestart: () => void
}

export function FoundAllCountriesModal({ isOpen, onClose, onRestart }: FoundAllCountriesModalProps) {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <Confetti isActive={true} />
      <ModalOverlay />
      <ModalContent ml="4" mr="4">
        <ModalHeader><Text as='span' color={useColorModeValue("blue.500", "blue.400")}>Congratulations!,</Text> {"You've completed the game!"} </ModalHeader>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="red" mr={3} rightIcon={<Icon as={AiFillHome} />}>Home</Button>
          <Button colorScheme='linkedin' rightIcon={<Icon as={GiReturnArrow} />} onClick={onRestart}>
            Play again
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
