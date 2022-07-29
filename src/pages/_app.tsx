import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

/**
  in the future
 export function reportWebVitals(metric: any) {
   console.log(metric)
  }
*/

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
