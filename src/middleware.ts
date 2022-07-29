import { withAuth } from 'next-auth/middleware'

import { publicUrls } from './config/pages'

/**
 * Validate authorized routes.
 */
export default withAuth({
  callbacks: {
    authorized: async ({ token, req }) => {
      const url = req.url
      const isPublicUrl = publicUrls.some(publicUrl => publicUrl.test(url))
      if (isPublicUrl) {
        return true
      }

      return !!token
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
})
