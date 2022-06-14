import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps {
  children: string
}

export const GhostButton = ({ children }: ButtonProps) => {
  return (
    <ChakraButton
      px={{ base: '1rem', m: '1.7rem' }}
      py={{ base: '1.4rem', m: '1.7rem' }}
      fontSize={{ base: '.8rem', m: '1rem' }}
      borderWidth={2}
      borderColor="red.primary"
      w={{ base: '100%', m: '30%' }}
      bgColor="transparent"
      textTransform="uppercase"
      fontWeight="bold"
      transition="0.2s all ease-in"
      boxShadow="0px 0px 20px rgba(227, 7, 36, 0.6)"
      _hover={{
        filter: 'drop-shadow(0px 0px 14px rgba(227, 7, 36, 0.7))',
        boxShadow: '0px 0px 20px rgba(227, 7, 36, 0)',
        bgColor: 'red.primary'
      }}
      _active={{ opacity: 0.9 }}
      _focus={{ border: 'red.primary' }}
    >
      {children}
    </ChakraButton>
  )
}
