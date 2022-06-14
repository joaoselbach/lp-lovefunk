import Head from 'next/head'

import { Box } from '@chakra-ui/react'
import { Banner } from '~/containers/banner'
import { Form } from '~/containers/form'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Love Funk - Início</title>
      </Head>
      <Box
        backgroundImage={{
          base: '/images/bannerMobile.png',
          m: '/images/bannerInteiro.png'
        }}
        backgroundSize="cover"
        backgroundPosition="inherit"
        backgroundRepeat="no-repeat"
      >
        <Banner />
        <Form />
      </Box>
    </>
  )
}

export default Home
