import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Avatar,
  Center,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'

export function User() {
  const { data: session } = useSession()

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
            src={session?.user.image as string}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {session?.user.name}
            </Heading>
            <Text color={'gray.500'}>{session?.user.login}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
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
