import { useEffect, useRef, useState } from 'react'

import Lottie from 'react-lottie'
import * as animationData from '../../assets/spectrumTop.json'

import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { gql, useMutation } from '@apollo/client'
import * as yup from 'yup'

import { Input } from '~/components/Input'
import { SubmitButton } from '~/components/Buttons/SubmitButton'
import { IconLink } from '~/components/IconLink'

import { RiUser2Fill, RiMailAddFill, RiWhatsappFill } from 'react-icons/ri'

import {
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  HStack,
  useToast,
  Checkbox,
  Box
} from '@chakra-ui/react'

type LeadsFormData = {
  nome: string
  email: string
  celular: string
}

const CREATE_LEAD = gql`
  mutation createLP($input: LandingPageInput) {
    createLP(input: $input) {
      status {
        status
        message
      }
    }
  }
`

const leadsFormSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  celular: yup
    .string()
    .required('Celular obrigatório')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Número de celular inválido'
    )
})

export const Form = () => {
  const [createLP, { data: formData, loading: formLoading, error }] =
    useMutation(CREATE_LEAD)

  const toast = useToast()
  const spectrum = useRef(null)

  const [fillEmail, setFillEmail] = useState(false)
  const [fillName, setFillName] = useState(false)
  const [fillPhone, setFillPhone] = useState(false)
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false
  })

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(leadsFormSchema)
  })

  const { errors } = formState

  useEffect(() => {
    if (formData?.createLP) {
      if (formData.createLP.status.status === 200) {
        toast({
          title: 'Sucesso',
          description: 'Seu dados foram enviados com sucesso!',
          status: 'success',
          duration: 9000,
          isClosable: true
        })
        reset()
      } else {
        toast({
          title: 'Erro.',
          description: 'Algo de errado aconteceu',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    }
  }, [formData])

  const handleLeads: SubmitHandler<LeadsFormData> = async values => {
    createLP({
      variables: {
        input: {
          ...values
        }
      }
    })
  }

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
      id="fiquepordentro"
      w="100%"
      h="100%"
      px={{ base: '2rem', m: '6rem' }}
      flexDirection="column"
      justifyContent={{ base: 'center', m: 'flex-start' }}
      alignItems="center"
    >
      <Heading
        position="relative"
        fontSize={{ base: '2.5rem', m: '6rem' }}
        color="red.primary"
        fontFamily="Koulen, cursive"
        letterSpacing="3px"
        textShadow="0px 0px 30px rgba(227, 7, 36, 0.5)"
        lineHeight="3.5rem"
      >
        FIQUE POR DENTRO
        <Box ml="-3.5rem">
          <Lottie
            options={defaultOptions}
            height="100%"
            width="108%"
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </Box>
      </Heading>
      <Flex
        w="100%"
        mt="8rem"
        gap={{ base: '6rem', m: '10rem' }}
        alignItems="flex-start"
        justifyContent="center"
        flexDirection={{ base: 'column', m: 'row' }}
      >
        <Flex flexDirection="column">
          <Text
            fontSize={{ base: '1.3rem', m: '1.7rem' }}
            maxWidth={540}
            textAlign={{ base: 'center', m: 'inherit' }}
          >
            Para ficar por dentro das novidades que vão acontecer, inscreva-se
            com seu e-mail:
            <Image mt="1.5rem" src="/images/borderBottomRed.svg" />
          </Text>
        </Flex>
        <Flex
          as="form"
          gap="1.25rem"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          maxWidth={500}
          onSubmit={handleSubmit(handleLeads)}
        >
          <Stack
            spacing="1.5rem"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
          >
            <Input
              name="nome"
              type="nome"
              label="Digite seu nome completo:"
              placeholder="Nome"
              icon={RiUser2Fill}
              error={errors.nome}
              {...register('nome')}
              onBlur={() => setFillName(false)}
              onFocus={() => setFillName(true)}
              stateIcon={fillName}
            />
            <Input
              name="email"
              type="email"
              placeholder="email@email.com"
              label="Digite seu melhor e-mail:"
              icon={RiMailAddFill}
              error={errors.email}
              {...register('email')}
              onBlur={() => setFillEmail(false)}
              onFocus={() => setFillEmail(true)}
              stateIcon={fillEmail}
            />
            <Input
              name="celular"
              type="celular"
              placeholder="(41) 99798-0688"
              label="Digite seu Whatsapp:"
              icon={RiWhatsappFill}
              error={errors.celular}
              {...register('celular')}
              onBlur={() => setFillPhone(false)}
              onFocus={() => setFillPhone(true)}
              stateIcon={fillPhone}
            />
            <Checkbox isDisabled defaultChecked colorScheme="red">
              Aceito compartilhar minhas informações com a Love Funk
            </Checkbox>
          </Stack>
          <SubmitButton
            type="submit"
            fontSize="18"
            px="3rem"
            py="1.6rem"
            isLoading={formLoading}
          >
            Enviar
          </SubmitButton>
        </Flex>
      </Flex>
      <Flex
        mt={{ base: '6rem', m: '10rem' }}
        flexDirection="column"
        alignItems="center"
        gap="1rem"
      >
        <Image src="/images/logoFooter.png" />
        <Text>Siga nas redes</Text>
        <HStack>
          <IconLink src="/images/facebook.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/instagram.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/youtube.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/spotify.svg" href="https://chakra-ui.com" />
          <IconLink src="/images/soundcloud.svg" href="https://chakra-ui.com" />
        </HStack>
        <Text fontSize=".8rem" textAlign="center">
          Copyright © 2022 Formato Funk Agenciamento Artístico LTDA, todos os
          direitos reservados - 34.025.192/0001-02
        </Text>
      </Flex>
    </Flex>
  )
}
