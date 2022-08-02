import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'
import { User } from '../components/User'

/**
 * Server side.
 */
export const getServerSideProps: GetServerSideProps = async context => {
  /**
   * Get session.
   */
  const session = await getSession(context)

  const username = context.params?.username

  /**
   * If Username is not the same as the logged user.
   */
  if (!!session?.user.login && session?.user.login !== username) {
    return {
      redirect: {
        destination: `/${session?.user.login}`,
        permanent: false,
      },
    }
  }

  return { props: {} }
}

/**
 * Page.
 */
export default function UserPage() {
  /**
   * JSX.
   */
  return <User />
}
