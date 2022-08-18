import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react'

/**
 * Page.
 */
export default function SignOutPage() {
  useEffect(() => {
    /**
     * Sign-out.
     */
    signOut()
  }, [])

  /**
   * JSX.
   */
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Box textAlign="center" py={10} px={6}>
        <Spinner speed="0.95s" size="xl" />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Sua sessão foi finalizada
        </Heading>
      </Box>
    </Flex>
  )
}
