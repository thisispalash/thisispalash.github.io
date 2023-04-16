import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Comfortaa, sans-serif',
  body: 'Montserrat, sans-serif', 
  mono: 'Source Code Pro, monospace',
}

const colors = {
  bg: '#000000',
  bgSecondary: '#0f0f0f',
  text: '#eeeeee',
  highlight: '#82ceaf',
  bgGradient: 'linear-gradient(90deg, #65789a 0%, #0f0f0f 100%)',
  bgAlt: '#5B6C8A'
}

const styles = {
  global: {
    body: {
      bg: 'bg',
      color: 'text',
      fontFamily: 'body',
      fontSize: 'md',
      lineHeight: 'tall',
    }
  }
}

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
        color: 'highlight',
      },
    },
    variants: {
      'reverse': {
        color: 'highlight',
        _hover: {
          textDecoration: 'none',
          color: 'text',
        },
      }
    }
  },
}

export const theme = extendTheme({
  fonts,
  colors,
  styles,
  components,
});
