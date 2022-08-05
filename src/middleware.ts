import { withAuth } from 'next-auth/middleware'

/**
 * URLs publics.
 */
import { publicUrls } from './config/pages'

/**
 * Validate authorized routes.
 */
export default withAuth({
  callbacks: {
    authorized: async ({ token, req }) => {
      /**
       * URL.
       */
      const url = req.url

      /**
       * Check if the URL is public.
       */
      const isPublicUrl = publicUrls.some(publicUrl => publicUrl.test(url))

      if (isPublicUrl) {
        return true
      }

      return !!token && !!token.access_token
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
})
