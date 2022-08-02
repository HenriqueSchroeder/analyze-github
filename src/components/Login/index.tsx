import { signIn } from 'next-auth/react'
import { Heading, Stack, Text, Button } from '@chakra-ui/react'

/**
 * Component.
 */
export function Login() {
  /**
   * JSX.
   */
  return (
    <Stack textAlign={'center'} spacing={{ base: 8, md: 14 }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        Analyze
        <br />
        <Text as={'span'} color={'green.400'}>
          GitHub
        </Text>
      </Heading>

      {/* <Text color={'gray.500'}>...</Text> */}

      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
        <Button
          colorScheme={'green'}
          bg={'green.400'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'green.500',
          }}
          onClick={() => {
            signIn('github')
          }}>
          Entrar
        </Button>
      </Stack>
    </Stack>
  )
}
