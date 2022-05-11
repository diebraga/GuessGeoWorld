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
import { normalizeWorldCountriesLanguage } from '../../translations/world-countries/normalizeWorldCountriesLanguage';
import { convertSecoundsToMmSs } from '../../utils/convertSecoundsToMmSs';

type HelpCountriesWorldModalProps = {
  isOpen: boolean
  onClose: () => void
  modalHelpWorldCountriesWllNotOpen: boolean
  setModalHelpWorldCountriesWllNotOpen: (value: boolean | ((val: boolean) => boolean)) => void
  allCountriesLenght: number
  totalSeconds: number
  locale: localeType
}

export function HelpCountriesWorldModal({
  isOpen,
  onClose,
  modalHelpWorldCountriesWllNotOpen,
  setModalHelpWorldCountriesWllNotOpen,
  allCountriesLenght,
  totalSeconds,
  locale
}: HelpCountriesWorldModalProps) {

  const { width } = useWindowSize()

  const { translation } = normalizeWorldCountriesLanguage(locale)

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={useColorModeValue("white", "gray.800")} ml="2" mr="2">
        <ModalHeader>{translation.instructions}</ModalHeader>
        <ModalBody mb='1'>
          <Box mb='5'>
            <Image src="/images/help-world-country.png" />
          </Box>
          <Text>
            {translation.your_goal_is_find} {allCountriesLenght} {translation.missing_countries_in_the_map} <br />
            {translation.you_have} {convertSecoundsToMmSs(totalSeconds).slice(0, -3)} {translation.minutes_to_complete_the_task} <br />
            <span style={{ fontWeight: 400 }}>{translation.good_luck}🍀</span>
          </Text>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Checkbox size={'sm'} onChange={(e) => setModalHelpWorldCountriesWllNotOpen(e.target.checked)} isChecked={modalHelpWorldCountriesWllNotOpen}>
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

