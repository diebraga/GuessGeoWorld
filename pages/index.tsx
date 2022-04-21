import { Box, Center, Heading, Image, Link as ChackraLink } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { HeadComponent } from '../components/HeadComponent'
import MotionBox from '../components/MotionBox'

const Home: NextPage = () => {
  return (
    <Box minH='100vh' alignItems='center' justifyContent='center' display='flex' flexDir='column'>
      <HeadComponent
        title="GuessGeoWorld - Home"
        description="GuessGeoWorld Home page"
      />
      <Center flexDir='column' mb='4'>
        <Heading fontFamily='Luckiest Guy' fontSize={["32px", "40px", "50px", "55px"]}>
          GuessGeoWorld
        </Heading>
        <Link href='/world-countries'>
          <ChackraLink fontSize={["14px", "17px", "19px", "23px"]}>
            Start game
          </ChackraLink>
        </Link>
      </Center>
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={["75%", "70%", "50%", "30%"]}
        margin="0 auto"
      >
        <Image src='/images/front-bg.png' />
      </MotionBox>
    </Box>
  )
}

export default Home
