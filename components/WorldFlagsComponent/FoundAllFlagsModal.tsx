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
import { localeType } from '../../@types/localeType';
import { normalizeWorldFlagsLanguage } from '../../translations/world-flags/normalizeWorldFlagsLanguage';

type FoundAllFlagsModalProps = {
  isOpen: boolean
  onClose: () => void
  onRestart: () => void
  locale: localeType
}

export function FoundAllFlagsModal({ isOpen, onClose, onRestart, locale }: FoundAllFlagsModalProps) {
  const { width } = useWindowSize()

  const { translation } = normalizeWorldFlagsLanguage(locale)

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
            <ModalHeader><Text as='span' color={useColorModeValue("blue.500", "blue.400")}>{translation.congratulations},</Text> {translation.youve_completed_the_game} </ModalHeader>
            <ModalFooter>
              <Button
                onClick={onClose}
                colorScheme="red"
                mr={3}
                rightIcon={<Icon as={AiFillHome} />}
                size={width as number < 400 ? "sm" : "md"}
              >
                {translation.home}
              </Button>
              <Button
                colorScheme='linkedin'
                rightIcon={<Icon as={GiReturnArrow} />}
                onClick={onRestart}
                size={width as number < 400 ? "sm" : "md"}
              >
                {translation.play_again}
              </Button>
            </ModalFooter>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
