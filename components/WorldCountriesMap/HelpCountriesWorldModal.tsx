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

type HelpCountriesWorldModalProps = {
  isOpen: boolean
  onClose: () => void
  modalHelpWorldCountriesWllNotOpen: boolean
  setModalHelpWorldCountriesWllNotOpen: (value: boolean | ((val: boolean) => boolean)) => void
  allCountriesLenght: number
  totalSeconds: number
}

export function HelpCountriesWorldModal({
  isOpen,
  onClose,
  modalHelpWorldCountriesWllNotOpen,
  setModalHelpWorldCountriesWllNotOpen,
  allCountriesLenght,
  totalSeconds
}: HelpCountriesWorldModalProps) {

  const { width } = useWindowSize()

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "gray.800")} ml="2" mr="2">
        <ModalHeader> Instructions</ModalHeader>
        <ModalBody mb='1'>
          <Box mb='5'>
            <Image src="/images/help-world-country.png" />
          </Box>
          <Text>
            Your goal is find {allCountriesLenght} missing countries in the map. <br />
            You have {convertSecoundsToMmSs(totalSeconds).slice(0, -3)} minutes to complete the task. <br />
            <span style={{ fontWeight: 400 }}>Good luck.🍀</span>
          </Text>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Checkbox size={'sm'} onChange={(e) => setModalHelpWorldCountriesWllNotOpen(e.target.checked)} isChecked={modalHelpWorldCountriesWllNotOpen}>
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

