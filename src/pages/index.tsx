import { getSession, GetSessionParams } from 'next-auth/react'
import Head from 'next/head'

/**
 * Components.
 */
import { Login } from '../components/Login'

/**
 * Server side.
 */
export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context)

  if (session && session?.user?.access_token) {
    return {
      redirect: {
        destination: `/${session?.user.login}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

/**
 * Page.
 */
export default function IndexPage() {
  /**
   * JSX.
   */
  return (
    <div>
      <Head>
        <title>Analyze GitHub</title>
      </Head>
      <Login />
    </div>
  )
}
