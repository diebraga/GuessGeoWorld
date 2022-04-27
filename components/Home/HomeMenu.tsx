import { Center, Heading, HStack } from '@chakra-ui/react'
import { GithubStars } from './GithubStars';
import { HomeMenuItem } from './HomeMenuItem';

const MenuItems = [
  { title: "World Countries", description: "Can you name all countries the by heart?", href: "/world-countries" },
  { title: "World Flags", description: "Test your knowledge naming country flags!", href: "/world-flags" },
]

export function HomeMenu() {
  return (
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
              href={item.href}
              key={item.title}
            />
          )
        })}
      </HStack>
      <GithubStars />
    </Center>
  )
}
