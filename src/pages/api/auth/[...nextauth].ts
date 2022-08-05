import GithubProvider from 'next-auth/providers/github'
import NextAuth, { NextAuthOptions } from 'next-auth'

import { clearAccessToken, definesAccessToken } from '../../../services/GitHub'
import { CLIENT_ID, CLIENT_SECRET, NEXTAUTH_SECRET } from '../../../config/env'

export const authOptions: NextAuthOptions = {
  /**
   * Configure one or more authentication providers.
   */
  providers: [
    GithubProvider({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          url: profile.html_url,
          name: profile.name ?? profile.login,
          type: profile.type,
          login: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          html_url: profile.html_url,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.access_token) {
        token.access_token = account.access_token
      }

      /**
       * Some user data.
       */
      if (user) {
        token.id = user.id
        token.url = user.url
        token.type = user.type
        token.email = user.email
        token.image = user.image
        token.login = user.login
        token.html_url = user.html_url
      }
      return token
    },
    async session({ session, token }) {
      /**
       * Some user data.
       */
      session.user = {
        id: token.id,
        url: token.url,
        name: token.name ?? token.login,
        type: token.type,
        email: token.email,
        image: token.image,
        login: token.login,
        html_url: token.html_url,
        access_token: token.access_token,
      }

      if (session.user?.access_token) {
        definesAccessToken(session.user?.access_token)
      }

      return session
    },
  },
  events: {
    async signOut() {
      clearAccessToken()
    },
  },
  secret: NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
    error: '/',
  },
}

export default NextAuth(authOptions)
