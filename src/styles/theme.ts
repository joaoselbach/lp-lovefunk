import { breakpoints } from './breakpoints';
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  breakpoints,
  colors: {
    gray: {
      background: '#1b1d1e',
      input: '#242424',
      icon: '#636363',
      placeholder: '#686f75',
      light: '#EEEEF2',
    },
    red: {
      primary: '#E30724',
      hover: '#CF0721',
      focus: '#fe223f',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      },
      html: {
        scrollBehavior: 'smooth'
      }
    }
  }
})

export default theme
