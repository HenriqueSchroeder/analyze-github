import { Flex, Container } from '@chakra-ui/react'
import { getSession, GetSessionParams } from 'next-auth/react'

import { Login } from '../components/Login'

/**
 * Server side.
 */
export async function getServerSideProps(
  context: GetSessionParams | undefined,
) {
  const session = await getSession(context)

  if (session) {
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
    <Container maxW={'3xl'}>
      <Flex minH={'100vh'} align={'center'} justify={'center'}>
        <Login />
      </Flex>
    </Container>
  )
}
