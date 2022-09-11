import { signOut } from 'next-auth/react'
import { getSession } from 'next-auth/react'
import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
} from '@mui/material'

/**
 * Services.
 */
import { apiGitHub } from '../services/GitHub'

/**
 * Utils.
 */
import { withGitHubAuth } from '../utils/withGitHubAuth'

/**
 * Types.
 */
import { User } from '../services/GitHub/types'

/**
 * Server side.
 */
export const getServerSideProps: GetServerSideProps = withGitHubAuth(
  async (context, access_token): Promise<GetServerSidePropsResult<{}>> => {
    /**
     * Get session.
     */
    const session = await getSession(context)

    const username = context.params?.username

    /**
     * If Username is not the same as the logged user.
     */
    if (!!session?.user.login && session?.user.login !== username) {
      return {
        redirect: {
          destination: `/${session?.user.login}`,
          permanent: false,
        },
      }
    }

    /**
     * Get user.
     */
    const { data } = await new apiGitHub(access_token).user()

    return { props: { dataUser: data } }
  },
)

/**
 * Page.
 */
export default function UserPage({ dataUser }: { dataUser: User }) {
  /**
   * JSX.
   */
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={dataUser.avatar_url}
        title={dataUser.login}
        alt={dataUser.login}
        sx={{ height: '200px' }}
      />
      <CardContent>
        <Typography>{dataUser.name}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            signOut()
          }}>
          Sair
        </Button>
      </CardActions>
    </Card>
  )
}
