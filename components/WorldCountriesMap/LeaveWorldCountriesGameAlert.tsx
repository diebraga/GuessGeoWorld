import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { MutableRefObject } from 'react'
import { localeType } from '../../@types/localeType'
import { useWindowSize } from '../../hooks/useWindowSize'
import { normalizeWorldCountriesLanguage } from '../../translations/world-countries/normalizeWorldCountriesLanguage'

type LeaveWorldCountriesGameAlertProps = {
  leastDestructiveRef: MutableRefObject<undefined>
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  locale: localeType
}

export function LeaveWorldCountriesGameAlert({ leastDestructiveRef, isOpen, onClose, onConfirm, locale }: LeaveWorldCountriesGameAlertProps) {
  const { width } = useWindowSize()

  const { translation } = normalizeWorldCountriesLanguage(locale)

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent ml="4" mr="4">
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {translation.would_you_like_to_end_this_game}
          </AlertDialogHeader>

          <AlertDialogBody color={useColorModeValue("red.500", "red.400")}>
            {translation.all_your_progress_will_be_lost}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={onClose} size={width as number < 400 ? "sm" : "md"}>
              {translation.no}
            </Button>
            <Button colorScheme='red' onClick={onConfirm} ml={3} size={width as number < 400 ? "sm" : "md"}>
              {translation.yes}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
