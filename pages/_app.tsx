import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SoundProvider } from '../contexts/soundContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SoundProvider>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </SoundProvider>
    </ChakraProvider>
  )
}

export default MyApp
