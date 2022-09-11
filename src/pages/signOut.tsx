import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'

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
    <Stack minHeight={'100vh'} textAlign={'center'} justifyContent="center">
      <Box textAlign="center" py={10} px={6}>
        <CircularProgress />
        <Typography>Sua sessão foi finalizada</Typography>
      </Box>
    </Stack>
  )
}
