import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  Button,
  Avatar,
  Center,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { signOut } from 'next-auth/react'

import { apiGitHub } from '../services/GitHub'

/**
 * Types.
 */
import { User } from '../services/GitHub/types'

/**
 * Server side.
 */
export const getServerSideProps: GetServerSideProps = async context => {
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
  const { data } = await apiGitHub.user()

  return { props: { dataUser: data } }
}

/**
 * Page.
 */
export default function UserPage({ dataUser }: { dataUser: User }) {
  /**
   * JSX.
   */
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        mt={'100px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Flex justify={'center'} mt={'10px'}>
          <Avatar
            size={'xl'}
            src={dataUser.avatar_url}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {dataUser.name}
            </Heading>
            <Link py={2} color={'gray.500'} href={dataUser.html_url}>
              {dataUser.login}
            </Link>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{dataUser.followers}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Seguidores
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{dataUser.following}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Seguindo
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            onClick={() => signOut({ callbackUrl: '/' })}>
            SAIR
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
