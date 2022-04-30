import { Box, Image } from '@chakra-ui/react'
import type { GetServerSideProps } from 'next'
import { localeType } from '../@types/localeType'
import { HeadComponent } from '../components/HeadComponent'
import { HomeMenu } from '../components/Home/HomeMenu'
import MotionBox from '../components/MotionBox'
import { normalizeHomeLanguage } from '../translations/home/normalizeHomeLanguage'

type HomeProps = {
  locale: localeType
}

const Home = ({ locale }: HomeProps) => {
  const { translation } = normalizeHomeLanguage(locale)
  return (
    <Box minH='100vh' alignItems='center' justifyContent='center' display='flex' flexDir='column'>
      <HeadComponent
        title={`GuessGeoWorld - ${translation.home}`}
        description={`GuessGeoWorld ${translation.head_description}`}
      />

      <HomeMenu
        locale={locale}
      />

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = context.locale

  return {
    props: {
      locale
    },
  };
};
