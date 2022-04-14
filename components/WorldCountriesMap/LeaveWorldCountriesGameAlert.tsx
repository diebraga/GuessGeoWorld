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
import { useWindowSize } from '../../hooks/useWindowSize'

type LeaveWorldCountriesGameAlertProps = {
  leastDestructiveRef: MutableRefObject<undefined>
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export function LeaveWorldCountriesGameAlert({ leastDestructiveRef, isOpen, onClose, onConfirm }: LeaveWorldCountriesGameAlertProps) {
  const { width } = useWindowSize()

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={leastDestructiveRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent ml="4" mr="4">
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Would you like to end this game?
          </AlertDialogHeader>

          <AlertDialogBody color={useColorModeValue("red.500", "red.400")}>
            All your progress will be lost.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={onClose} size={width as number < 400 ? "sm" : "md"}>
              No
            </Button>
            <Button colorScheme='red' onClick={onConfirm} ml={3} size={width as number < 400 ? "sm" : "md"}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
