import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export function Auth({ children }: { children: JSX.Element }) {
  const { status } = useSession()

  const isAuthenticated = status === 'authenticated'
  const isLoading = status === 'loading'

  useEffect(() => {
    if (isLoading) return
    if (!isAuthenticated) signIn('github')
  }, [isAuthenticated, isLoading])

  if (isAuthenticated) {
    return children
  }

  return <div>Loading...</div>
}
