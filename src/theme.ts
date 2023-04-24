import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Comfortaa, sans-serif',
  body: 'Montserrat, sans-serif', 
  mono: 'Source Code Pro, monospace',
}

const colors = {
  bg: '#000000',
  bgSecondary: '#0f0f0f',
  bgAlternate: '#65789a',
  bgAltSecondary: '#5b6C8a',
  text: '#eeeeee',
  textSecondary: '#dff1ff',
  highlight: '#82ceaf',
  highlights: {
    50: '#0a1a13',
    100: '#133024',
    200: '#255f48',
    300: '#39936f',
    400: '#52bc92',
    500: '#82ceaf',
    600: '#7ad6b1',
    700: '#73deb3',
    800: '#6ce5b4',
    900: '#64edb6',
  },
  highlightsAlt: {
    50: '#5b6C8a',
    100: '#65789a',
    200: '#255f48',
    300: '#39936f',
    400: '#52bc92',
    500: '#82ceaf',
    600: '#7ad6b1',
    700: '#73deb3',
    800: '#6ce5b4',
    900: '#64edb6',
  },
  bgGradient: 'linear-gradient(180deg, #65789a 0%, #000000 90%)'
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
