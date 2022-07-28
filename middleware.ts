import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

import parseUrl from './lib/parseUrl'
import { NEXTAUTH_URL } from './config/env'
import { staticPages, pages, pagesWithoutAuthentication } from './config/pages'

/**
 * Middleware to check if the user is authenticated.
 */
export async function middleware(request: NextRequest) {
  /**
   * NextAuth base route.
   */
  const basePathAuth = parseUrl(NEXTAUTH_URL).path

  /**
   * If the route has no authentication, so you don't have to check.
   */
  if (
    request.nextUrl.pathname.startsWith(basePathAuth) ||
    !!staticPages.find(page => request.nextUrl.pathname.startsWith(page)) ||
    pagesWithoutAuthentication.includes(request.nextUrl.pathname)
  ) {
    return NextResponse.next()
  }

  /**
   * Get the session.
   */
  const session = await getToken({ req: request, raw: true })
  /**
   * If the session is not authenticated, redirect to the signin page.
   */
  if (!session) {
    return NextResponse.redirect(new URL(pages.signIn, request.url))
  }

  /**
   * If the session is authenticated, continue.
   */
  return NextResponse.next()
}
