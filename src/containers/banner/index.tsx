import Lottie from 'react-lottie'
import * as animationData from '../../assets/notes.json'

import { GhostButton } from '~/components/Buttons/GhostButton'

import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const Banner = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Flex
      w="100%"
      h={{ base: '100vh', m: '110vh' }}
      px={{ base: '1.5rem', m: '6rem' }}
      justifyContent={{ base: 'center', m: 'flex-start' }}
      alignItems="center"
    >
      <Flex
        gap="2.5rem"
        mt="6rem"
        textAlign={{ base: 'center', m: 'inherit' }}
        alignItems={{ base: 'center', m: 'flex-start' }}
        flexDirection="column"
      >
        <Flex
          mt={{ base: '8rem', m: '0' }}
          alignItems={{ base: 'center', m: 'flex-start' }}
          flexDirection="column"
        >
          <Heading
            fontSize={{ base: '2rem', m: '6rem' }}
            textTransform="uppercase"
            color="red.primary"
            fontFamily="Koulen, cursive"
            letterSpacing="3px"
            textShadow="0px 0px 30px rgba(227, 7, 36, 0.5)"
          >
            Love Funk em
            <Box ml="-3.5rem" position="absolute" top="12rem" left="32rem">
              <Lottie
                options={defaultOptions}
                height="100%"
                width="40%"
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            </Box>
          </Heading>
          <Heading
            fontSize={{ base: '2rem', m: '6rem' }}
            textTransform="uppercase"
            fontFamily="Koulen"
            letterSpacing="3px"
          >
            Conteudos Exlusivos?
          </Heading>
        </Flex>
        <Text
          maxWidth={800}
          fontWeight="medium"
          fontSize={{ base: '.8rem', m: '1.5rem' }}
          textAlign="inherit"
        >
          Já pensou em ter acesso a músicas e videoclipes exclusivos do: MC Lipe
          , MC Paulin da Capital, MC Paiva e muito mais?
        </Text>
        <Text fontWeight="semibold" fontSize={{ base: '1.1rem', m: '1.5rem' }}>
          Então, se inscreve aí
        </Text>

        <GhostButton>Saiba mais</GhostButton>
      </Flex>
    </Flex>
  )
}
