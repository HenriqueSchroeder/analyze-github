import { JWT } from 'next-auth/jwt'
import { AppProps } from 'next/app'
import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      name: string
      email: string
      image: string
    }
    acessToken: string
    expires: ISODateString
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    acessToken?: string
  }
}
