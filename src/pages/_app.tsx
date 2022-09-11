import Head from 'next/head'
import { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { SessionProvider } from 'next-auth/react'
import { CacheProvider, EmotionCache } from '@emotion/react'

/**
 * Component.
 */
import { Analytics } from '../components/Analytics'
import { ThemeProvider } from '../components/Theme'

/**
 * Cache.
 */
import createEmotionCache from '../config/cache'

/**
  in the future
 export function reportWebVitals(metric: any) {
   console.log(metric)
  }
*/

/**
 * Interface Props.
 */
interface IAppProps extends AppProps {
  emotionCache?: EmotionCache
}

/**
 * Client-side cache, shared for the whole session of the user in the browser.
 */
const clientSideEmotionCache = createEmotionCache()

/**
 * App.
 */
export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: IAppProps) {
  /**
   * JSX.
   */
  return (
    <>
      <Analytics />
      <SessionProvider session={session}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
          </Head>
          <ThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </>
  )
}
