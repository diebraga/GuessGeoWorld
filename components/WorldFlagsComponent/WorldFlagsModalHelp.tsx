import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  Text,
  useColorModeValue,
  Box,
  ModalBody,
  Image,
  Checkbox,
} from '@chakra-ui/react'
import { useWindowSize } from '../../hooks/useWindowSize';
import { convertSecoundsToMmSs } from '../../utils/convertSecoundsToMmSs';

type WorldFlagsModalHelpProps = {
  isOpen: boolean
  onClose: () => void
  worldFlagsModalHelpWillNotOpen: boolean
  setWorldFlagsModalHelpWllNotOpen: (value: boolean | ((val: boolean) => boolean)) => void
  allFlagsLenght: number
  totalSeconds: number
}

export function WorldFlagsModalHelp({
  isOpen,
  onClose,
  worldFlagsModalHelpWillNotOpen,
  setWorldFlagsModalHelpWllNotOpen,
  allFlagsLenght,
  totalSeconds
}: WorldFlagsModalHelpProps) {
  const { width } = useWindowSize()

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "gray.800")} ml="2" mr="2">
        <ModalHeader> Instructions</ModalHeader>
        <ModalBody mb='1'>
          <Box mb='5'>
            <Image src="/gifs/help-flags.gif" />
          </Box>
          <Text>
            Your goal is find <strong>{allFlagsLenght}</strong> missing Flags in the map. <br />
            You have <strong>{convertSecoundsToMmSs(totalSeconds).slice(0, -3)}</strong> minutes to complete the task. <br />
            <span style={{ fontWeight: 400 }}>Good luck.🍀</span>
          </Text>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Checkbox size={'sm'} onChange={(e) => setWorldFlagsModalHelpWllNotOpen(e.target.checked)} isChecked={worldFlagsModalHelpWillNotOpen}>
            Don't show me again
          </Checkbox>
          <Button
            colorScheme='linkedin'
            size={width as number < 400 ? "sm" : "md"}
            onClick={onClose}
          >
            I undersatand
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

