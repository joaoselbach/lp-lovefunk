import { Button } from '@chakra-ui/react'

type ButtonProps = {
  children: string
  fontSize: string
  px: string
  py: string
  type: any
  isLoading?: boolean
}

export const SubmitButton = ({
  children,
  px,
  py,
  fontSize,
  type,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      type={type}
      px={px}
      py={py}
      fontSize={fontSize}
      w={{ base: '100%', m: '30%' }}
      mt="1rem"
      color="white.50"
      bgColor="red.primary"
      transition="0.2s all ease"
      filter="drop-shadow(0px 0px 10px rgba(227, 7, 36, 0.5))"
      _hover={{ filter: 'drop-shadow(0px 0px 14px rgba(227, 7, 36, 0.7))' }}
      _active={{ opacity: 0.9 }}
      _focus={{ boxShadow: 'none' }}
      isLoading={isLoading}
      {...rest}
    >
      {children}
    </Button>
  )
}
