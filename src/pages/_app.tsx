import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import theme from '../styles/theme'
import Header from '~/components/Header'

const client = new ApolloClient({
  uri: 'https://api-lovefunk.herokuapp.com/graphql',
  // uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
