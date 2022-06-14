import { Button as ChakraButton } from '@chakra-ui/react'

interface ButtonProps {
    children: string
    fontSize: string
    px: string
    py: string
}

export const SolidButton = ({ children, fontSize, py, px }: ButtonProps) => {
  return (
    <ChakraButton
      px={px}
      py={py}
      fontSize={fontSize}
      bgColor="red.primary"
      textTransform="uppercase"
      fontWeight="bold"
      transition="0.2s all ease"
      filter="drop-shadow(0px 0px 10px rgba(227, 7, 36, 0.5))"
      _hover={{ filter: 'drop-shadow(0px 0px 14px rgba(227, 7, 36, 0.7))' }}
      _active={{ opacity: 0.9 }}
      _focus={{ border: 'none' }}
    >
      {children}
    </ChakraButton>
  )
}
