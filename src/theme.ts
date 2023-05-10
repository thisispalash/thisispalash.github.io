import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

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

const editorJSColors = {
  bg: 'bg',
  color: 'textSecondary',
}

const styles = {
  global: {
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    body: {
      bg: 'bg',
      color: 'text',
      fontFamily: 'body',
      fontSize: 'md',
      lineHeight: 'tall',
    },
    '::selection': {
      color: 'bgSecondary',
      bg: 'highlight',
    },
    '.ce-block--selected': { color: 'bgSecondary' },
    '.ce-popover': editorJSColors,
    '.cdx-search-field': editorJSColors,
    '.ce-popover__item-icon': editorJSColors,
    '.ce-inline-toolbar--showed': editorJSColors,
    '.ce-conversion-toolbar--showed': editorJSColors,
    '.ce-conversion-tool__icon': editorJSColors,
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
      },
    }
  },
  Text: {
    baseStyle: {
      fontsize: 'md',
      lineHeight: 'tall',
    },
    variants: {
      'clickable': {
        cursor: 'pointer',
        _hover: {
          color: 'highlight',
        }
      },
      'heading': {
        fontFamily: 'heading',
        fontSize: '2xl',

      }
    }
  }
}

const proseStyles = {}

export const theme = extendTheme( 
  withProse(proseStyles),
  { fonts, colors, styles, components },
);
