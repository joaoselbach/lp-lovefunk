import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
  icon: any
  placeholder: string
  type: string
  stateIcon: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon, type, stateIcon, error = null, ...rest },
  ref
) => {

  return (
    <FormControl isInvalid={!!error} lineHeight="1rem">
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Flex
        flex=".25rem"
        py=".25rem"
        position="relative"
        alignItems="center"
        transition="2s"
        width="100%"
      >
        <Icon
          as={icon}
          position="absolute"
          left="5"
          fontSize="18"
          zIndex="4"
          fill={stateIcon ? 'red.focus' : 'gray.icon'}
          transition="fill 0.2s ease 0s"
        />
        <ChakraInput
          name={name}
          type={type}
          bg="gray.input"
          color="gray.light"
          px="1rem"
          h="3.5rem"
          padding="1rem"
          pl="12"
          variant="filled"
          _hover={{
            bgColor: 'gray.input'
          }}
          _focus={{
            bgColor: 'gray.input',
            borderColor: 'red.focus'
          }}
          _placeholder={{ color: 'gray.placeholder', fontSize: '15' }}
          ref={ref}
          {...rest}
        />
      </Flex>
      {!!error && <FormErrorMessage mt="0">{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
