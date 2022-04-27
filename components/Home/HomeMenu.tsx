import { Center, Heading, HStack, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { GithubStars } from './GithubStars';
import { HomeMenuDrawer } from './HomeMenuDrawer';
import { HomeMenuItem } from './HomeMenuItem';

const MenuItems = [
  { title: "World Countries", description: "Can you name all countries the by heart?", query: "world-countries" },
  { title: "World Flags", description: "Test your knowledge naming country flags!", query: "world-flags" },
]

export function HomeMenu() {
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
              />
            )
          })}
        </HStack>
        <GithubStars />
      </Center>
    </>
  )
}
