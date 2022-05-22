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
import { localeType } from '../../@types/localeType';
import { useWindowSize } from '../../hooks/useWindowSize';
import { normalizeWorldFlagsLanguage } from '../../translations/world-flags/normalizeWorldFlagsLanguage';
import { convertSecoundsToMmSs } from '../../utils/convertSecoundsToMmSs';

type WorldFlagsModalHelpProps = {
  isOpen: boolean
  onClose: () => void
  worldFlagsModalHelpWillNotOpen: boolean
  setWorldFlagsModalHelpWllNotOpen: (value: boolean | ((val: boolean) => boolean)) => void
  allFlagsLenght: number
  totalSeconds: number
  locale: localeType
}

export function WorldFlagsModalHelp({
  isOpen,
  onClose,
  worldFlagsModalHelpWillNotOpen,
  setWorldFlagsModalHelpWllNotOpen,
  allFlagsLenght,
  totalSeconds,
  locale
}: WorldFlagsModalHelpProps) {
  const { translation } = normalizeWorldFlagsLanguage(locale)

  const { width } = useWindowSize()

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "gray.800")} ml="2" mr="2">
        <ModalHeader> {translation.instructions}</ModalHeader>
        <ModalBody mb='1'>
          <Box mb='5'>
            <Image src="/gifs/help-flags.gif" />
          </Box>
          <Text>
            {translation.your_goal_is_find} <strong>{allFlagsLenght}</strong> {translation.missing_flags} <br />
            {translation.you_have} <strong>{convertSecoundsToMmSs(totalSeconds).slice(0, -3)}</strong> {translation.minutes_to_complete_the_task} <br />
            <span style={{ fontWeight: 400 }}>{translation.good_luck} 🍀</span>
          </Text>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Checkbox size={'sm'} onChange={(e) => setWorldFlagsModalHelpWllNotOpen(e.target.checked)} isChecked={worldFlagsModalHelpWillNotOpen}>
            {translation.dont_show_me_again}
          </Checkbox>
          <Button
            colorScheme='linkedin'
            size={width as number < 400 ? "sm" : "md"}
            onClick={onClose}
          >
            {translation.i_understand}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

