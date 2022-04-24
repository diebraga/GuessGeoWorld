import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Icon,
  Text,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { Confetti } from '../Confetti'
import { GiReturnArrow } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { useWindowSize } from '../../hooks/useWindowSize';

type FoundAllFlagsModalProps = {
  isOpen: boolean
  onClose: () => void
  onRestart: () => void
}

export function FoundAllFlagsModal({ isOpen, onClose, onRestart }: FoundAllFlagsModalProps) {
  const { width } = useWindowSize()

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent h="100%" maxW="100%" bg="transparent">
        <Confetti isActive={true} />
        <Box
          maxW="448px"
          position="absolute"
          top="50%"
          left="50%"
          marginRight="-50%"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Box
            bg={useColorModeValue("white", "gray.800")}
            borderRadius='md'
            ml="4"
            mr="4"
          >
            <ModalHeader><Text as='span' color={useColorModeValue("blue.500", "blue.400")}>Congratulations!,</Text> {"You've completed the game!"} </ModalHeader>
            <ModalFooter>
              <Button
                onClick={onClose}
                colorScheme="red"
                mr={3}
                rightIcon={<Icon as={AiFillHome} />}
                size={width as number < 400 ? "sm" : "md"}
              >
                Home
              </Button>
              <Button
                colorScheme='linkedin'
                rightIcon={<Icon as={GiReturnArrow} />}
                onClick={onRestart}
                size={width as number < 400 ? "sm" : "md"}
              >
                Play again
              </Button>
            </ModalFooter>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
