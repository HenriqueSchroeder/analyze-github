import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)

  const username = context.params?.username

  if (session?.user?.name !== username) {
    return {
      redirect: {
        destination: `/${session?.user?.name}`,
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
function User() {
  const { status, data } = useSession({
    required: true
  })

  /**
   * JSX.
   */
  return (
    <div>
      <h1>
        User, {status} {data?.user?.name}
        <button
          onClick={() => {
            signOut()
          }}
        >
          signOut
        </button>
      </h1>
    </div>
  )
}

export default User
