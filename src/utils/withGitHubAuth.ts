import { AxiosError } from 'axios'
import { getSession } from 'next-auth/react'
import { ParsedUrlQuery } from 'querystring'
import {
  PreviewData,
  GetServerSidePropsResult,
  GetServerSidePropsContext,
} from 'next'

/**
 * Type.
 */
type GetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData,
> = (
  context: GetServerSidePropsContext<Q, D>,
  access_token: string,
) => Promise<GetServerSidePropsResult<P>>

/**
 * Authentication in server side.
 */
export function withGitHubAuth<T>(fn: GetServerSideProps<T>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<T>> => {
    /**
     * Get session.
     */
    const session = await getSession(ctx)

    /**
     * Check if the user is logged in.
     */
    if (!session || !session.user.access_token) {
      return {
        redirect: {
          destination: '/signOut',
          permanent: false,
        },
      }
    }

    /**
     * Get access token.
     */
    const { access_token } = session.user

    /**
     * Get user information.
     */
    return new Promise(async resolve => {
      try {
        const result = await fn(ctx, access_token)
        resolve(result)
      } catch (error: any) {
        /**
         * If the error is authentication, close the session.
         */
        if (error instanceof AxiosError && error.code === 'ERR_BAD_REQUEST') {
          resolve({
            redirect: {
              destination: '/signOut',
              permanent: false,
            },
          })

          return
        }

        /**
         * If the error is any other, the error returns.
         */
        resolve({
          redirect: {
            destination: `/500?code=${error.code}`,
            permanent: false,
          },
        })

        throw error
      }
    })
  }
}
