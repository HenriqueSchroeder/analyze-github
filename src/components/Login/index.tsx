import { signIn } from 'next-auth/react'
import { Box, Button, Stack, Typography, Container } from '@mui/material'

/**
 * Component.
 */
export function Login() {
  /**
   * JSX.
   */
  return (
    <Container>
      <Box
        display="flex"
        minHeight="100vh"
        flexDirection="column"
        justifyContent="center">
        <Box justifyContent="center" textAlign={'center'}>
          <Stack justifyContent="center" textAlign={'center'}>
            <Typography fontSize={70} fontWeight={'bold'}>
              Analyze
            </Typography>

            <Typography
              color={'secondary'}
              fontSize={70}
              fontWeight={'bold'}
              marginBottom={'1rem'}>
              GitHub
            </Typography>
          </Stack>

          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              signIn('github')
            }}>
            Entrar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
