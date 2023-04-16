import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { theme } from '../theme';

import { GlobalProvider } from '../context/GlobalContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalProvider state={{}}>
        <Component {...pageProps} />
      </GlobalProvider>
    </ChakraProvider>
  );
}
