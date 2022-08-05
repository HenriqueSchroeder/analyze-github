import { JWT } from 'next-auth/jwt'
import { AppProps } from 'next/app'
import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
    expires: ISODateString
  }

  /**
   * User.
   */
  interface User {
    id: string
    url: string
    name: string | null
    type: string
    login: string
    email: string | null
    image: string
    html_url: string
    access_token?: string
  }
}

declare module 'next-auth/jwt' {
  /**
   * JWT.
   */
  interface JWT {
    id: string
    url: string
    type: string
    login: string
    email: string | null
    image: string
    html_url: string
    access_token?: string
  }
}
