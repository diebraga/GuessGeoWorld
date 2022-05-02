import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  Heading,
  Box,
} from '@chakra-ui/react'
import { localeType } from '../../@types/localeType'
import { normalizeHomeLanguage } from '../../translations/home/normalizeHomeLanguage'
import { HomeDrawerList } from './HomeDrawerList'

type HomeMenuDrawerProps = {
  isOpen: boolean
  onClose: () => void
  locale: localeType
}

export function HomeMenuDrawer({ isOpen, onClose, locale }: HomeMenuDrawerProps) {
  const { translation } = normalizeHomeLanguage(locale)

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
                {translation.choose_modality} 🌎
              </Heading>

              <HomeDrawerList
                locale={locale}
              />
            </Box>

          </Center>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}
