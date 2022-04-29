import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { normalizeHeaderLanguage } from '../../translations/header/normalizeHeaderLanguage'

export default function LanguageMenu({ locale }) {
  const { translation } = normalizeHeaderLanguage(locale)

  const router = useRouter()

  return (
    <Flex>
      <Menu>
        <MenuButton as={Link}>
          <Heading as='span'>
            {translation.language} <Text fontSize='x-large' as='span'>{translation.flag}</Text>
          </Heading>
        </MenuButton>
        <MenuList>
          {/* MenuItems are not rendered unless Menu is open */}
          {locale !== "en-US" && (
            <MenuItem onClick={() => router.push(router.asPath, router.asPath, { locale: "en-US" })}>
              English 🇺🇸
            </MenuItem>
          )}
          {locale !== "es-ES" && (
            <MenuItem onClick={() => router.push(router.asPath, router.asPath, { locale: "es-ES" })}>
              Español 🇪🇸
            </MenuItem>
          )}
          {locale !== "pt-BR" && (
            <MenuItem onClick={() => router.push(router.asPath, router.asPath, { locale: "pt-BR" })}>
              Português 🇧🇷
            </MenuItem>
          )}
          {locale !== "it" && (
            <MenuItem onClick={() => router.push(router.asPath, router.asPath, { locale: "it" })}>
              Italiano 🇮🇹
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  )
}
