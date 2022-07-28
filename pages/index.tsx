import type { NextPage } from 'next'
import {
  signIn,
  useSession,
  getSession,
  GetSessionParams
} from 'next-auth/react'

/**
 * Server side.
 */
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: `/${session.user?.name}`,
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

/**
 * Page.
 */
const Index: NextPage = () => {
  /**
   * JSX.
   */
  return (
    <div>
      <button
        onClick={() => {
          signIn('github')
        }}
      >
        GitHub
      </button>
    </div>
  )
}

export default Index
