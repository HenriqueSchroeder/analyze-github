import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

/**
  in the future
 export function reportWebVitals(metric: any) {
   console.log(metric)
  }
*/

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
