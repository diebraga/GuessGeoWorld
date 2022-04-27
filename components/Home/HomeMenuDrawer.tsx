import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Heading,
  Box,
} from '@chakra-ui/react'
import { HomeDrawerList } from './HomeDrawerList'

export function HomeMenuDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      size='full'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />

        <DrawerBody>
          <Center flexDir='column' minH='100vh' alignItems='center'>
            <Box>
              <Heading as='span'>
                Choose modality 🌎
              </Heading>

              <HomeDrawerList />
            </Box>

          </Center>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}
