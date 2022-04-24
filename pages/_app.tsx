import '../styles/globals.css'
import "react-multi-carousel/lib/styles.css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SoundProvider } from '../contexts/soundContext'
import { MainMenuProvider } from '../contexts/mainMenuContext';
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps }: AppProps) {
  const Header = dynamic(() => import('../components/Header'))

  return (
    <ChakraProvider theme={theme}>
      <MainMenuProvider>
        <SoundProvider>
          <Header />
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </SoundProvider>
      </MainMenuProvider>
    </ChakraProvider>
  )
}

export default MyApp
