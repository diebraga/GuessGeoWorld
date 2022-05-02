import { Center, Heading, HStack, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { localeType } from '../../@types/localeType';
import { normalizeHomeLanguage } from '../../translations/home/normalizeHomeLanguage';
import { GithubStars } from './GithubStars';
import { HomeMenuDrawer } from './HomeMenuDrawer';
import { HomeMenuItem } from './HomeMenuItem';

type HomeMenuProps = {
  locale: localeType
}

export function HomeMenu({ locale }: HomeMenuProps) {
  const { translation } = normalizeHomeLanguage(locale)

  const MenuItems = [
    { title: translation.world_countries, description: translation.can_you_name_all_countries_the_by_heart, query: "world-countries", footer: translation.discover },
    { title: translation.world_flags, description: translation.test_your_knowledge_naming_country_flags, query: "world-flags", footer: translation.discover },
  ]

  const {
    isOpen: menuDrawerIsOpen,
    onOpen: menuDrawerOnOpen,
    onClose: menuDrawerOnClose
  } = useDisclosure()

  const router = useRouter()

  function onOpenDrawer({ path }: { path: string }) {
    router.push({
      pathname: '/',
      query: { path: path }
    },
      undefined, { shallow: true })
    menuDrawerOnOpen()
  }

  return (
    <>
      <HomeMenuDrawer
        isOpen={menuDrawerIsOpen}
        onClose={menuDrawerOnClose}
        locale={locale}
      />
      <Center flexDir='column' mb='4' position='absolute' zIndex='2' top='30%'>
        <Heading fontFamily='Luckiest Guy' fontSize={["37px", "50px", "50px", "69px"]} color='white' textShadow='-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'>
          GuessGeoWorld
        </Heading>
        <HStack fontSize={["14px", "17px", "19px", "23px"]}>
          {MenuItems.map(item => {
            return (
              <HomeMenuItem
                title={item.title}
                description={item.description}
                key={item.title}
                onClick={() => onOpenDrawer({ path: item.query })}
                footer={item.footer}
              />
            )
          })}
        </HStack>
        <GithubStars />
      </Center>
    </>
  )
}
