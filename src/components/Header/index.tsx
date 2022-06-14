import { useRouter } from 'next/router'

import { SolidButton } from '../Buttons/SolidButton'
import { Flex, Image, Box } from '@chakra-ui/react'

const Header = () => {
  const router = useRouter()

  return (
    <Flex
      as="header"
      position="fixed"
      alignItems="center"
      justifyContent="space-between"
      zIndex="99"
      w="100%"
      h="5.5rem"
      px={{ base: '1.5rem', m: '6rem' }}
      boxShadow="0px 8px 15px rgb(0 0 0 / 17%)"
      backdropFilter="blur(2rem)"
      bgColor="#1b1d1eb8"
    >
      <Image
        src="/images/logoSmall.png"
        cursor="pointer"
        onClick={() => router.push('/')}
      />

      <Box
        as="a"
        href="#fiquepordentro"
        display={{ base: 'none', m: 'flex' }}
        position="relative"
        cursor="pointer"
        color="gray.200"
        fontSize="1rem"
        fontWeight="semi-bold"
        letterSpacing="1px"
        transition="0.3s all ease"
        _hover={{ color: '#fff', _after: { width: '100%' } }}
        _after={{
          content: `""`,
          position: 'absolute',
          width: '0',
          height: '3px',
          bg: 'red.primary',
          left: '0',
          bottom: '-5px',
          transition: '0.3s all ease',
          borderRadius: '.15rem',
          filter: 'drop-shadow(0px 0px 8px rgba(227, 7, 36, 0.9))'
        }}
      >
        Fique por dentro
      </Box>
      <SolidButton fontSize=".90rem" px="1.5rem" py="1.5rem">
        Compre agora
      </SolidButton>
    </Flex>
  )
}

export default Header
