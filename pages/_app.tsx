import { Auth } from '../components/Auth'
import { SessionProvider } from 'next-auth/react'

import { MyAppProps } from '../next-auth'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: MyAppProps) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

export default MyApp
