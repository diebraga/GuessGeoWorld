import '../styles/globals.css'
import "react-multi-carousel/lib/styles.css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SoundProvider } from '../contexts/soundContext'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SoundProvider>
        <Header />
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </SoundProvider>
    </ChakraProvider>
  )
}

export default MyApp
