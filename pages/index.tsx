import { Box, Image } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HeadComponent } from '../components/HeadComponent'
import { HomeMenu } from '../components/Home/HomeMenu'
import MotionBox from '../components/MotionBox'

const Home: NextPage = () => {
  return (
    <Box minH='100vh' alignItems='center' justifyContent='center' display='flex' flexDir='column'>
      <HeadComponent
        title="GuessGeoWorld - Home"
        description="GuessGeoWorld Home page"
      />

      <HomeMenu />

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

