import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

/**
 * Base document.
 */
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Analyze Github" />
        <meta
          name="google-site-verification"
          content="C0_4iFQ83kL1XdJ2GFUqMd_YozJ1K_9zDDU9sQtCwKw"
        />
      </Head>

      <body>
        <ColorModeScript initialColorMode={'dark'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
