import { signIn, getSession, GetSessionParams } from 'next-auth/react'
import { MyNextPage } from '../next-auth'

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
const Index: MyNextPage = () => {
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
