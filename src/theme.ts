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
    '.cursor-twitter': {
      cursor: 'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C%21--%21%20Font%20Awesome%20Pro%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%20%28Commercial%20License%29%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M459.37%20151.716c.325%204.548.325%209.097.325%2013.645%200%20138.72-105.583%20298.558-298.558%20298.558-59.452%200-114.68-17.219-161.137-47.106%208.447.974%2016.568%201.299%2025.34%201.299%2049.055%200%2094.213-16.568%20130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772%206.498.974%2012.995%201.624%2019.818%201.624%209.421%200%2018.843-1.3%2027.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969%207.797%2030.214%2012.67%2047.431%2013.319-28.264-18.843-46.781-51.005-46.781-87.391%200-19.492%205.197-37.36%2014.294-52.954%2051.655%2063.675%20129.3%20105.258%20216.365%20109.807-1.624-7.797-2.599-15.918-2.599-24.04%200-57.828%2046.782-104.934%20104.934-104.934%2030.213%200%2057.502%2012.67%2076.67%2033.137%2023.715-4.548%2046.456-13.32%2066.599-25.34-7.798%2024.366-24.366%2044.833-46.132%2057.827%2021.117-2.273%2041.584-8.122%2060.426-16.243-14.292%2020.791-32.161%2039.308-52.628%2054.253z%22%2F%3E%3C%2Fsvg%3E") 16 16, pointer'
    },
    '.cursor-linkedin': {
      cursor: 'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20448%20512%22%3E%3C%21--%21%20Font%20Awesome%20Pro%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%20%28Commercial%20License%29%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M100.28%20448H7.4V148.9h92.88zM53.79%20108.1C24.09%20108.1%200%2083.5%200%2053.8a53.79%2053.79%200%200%201%20107.58%200c0%2029.7-24.1%2054.3-53.79%2054.3zM447.9%20448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29%200-55.69%2037.7-55.69%2076.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5%2042.69-48.3%2087.88-48.3%2094%200%20111.28%2061.9%20111.28%20142.3V448z%22%2F%3E%3C%2Fsvg%3E") 16 16, pointer'
    },
    '.cursor-github': {
      cursor: 'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20496%20512%22%3E%3C%21--%21%20Font%20Awesome%20Pro%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%20%28Commercial%20License%29%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2%202.3zm44.2-1.7c-2.9.7-4.9%202.6-4.6%204.9.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3.3%202.9%202.3%203.9%201.6%201%203.6.7%204.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z%22%2F%3E%3C%2Fsvg%3E") 16 16, pointer'
    },
    '.cursor-message': {
      cursor: 'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C%21--%21%20Font%20Awesome%20Pro%206.4.0%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%20%28Commercial%20License%29%20Copyright%202023%20Fonticons%2C%20Inc.%20--%3E%3Cpath%20d%3D%22M512%20240c0%20114.9-114.6%20208-256%20208c-37.1%200-72.3-6.4-104.1-17.9c-11.9%208.7-31.3%2020.6-54.3%2030.6C73.6%20471.1%2044.7%20480%2016%20480c-6.5%200-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8%203.4-17.4l0%200%200%200%200%200%200%200%20.3-.3c.3-.3%20.7-.7%201.3-1.4c1.1-1.2%202.8-3.1%204.9-5.7c4.1-5%209.6-12.4%2015.2-21.6c10-16.6%2019.5-38.4%2021.4-62.9C17.7%20326.8%200%20285.1%200%20240C0%20125.1%20114.6%2032%20256%2032s256%2093.1%20256%20208z%22%2F%3E%3C%2Fsvg%3E") 16 16, pointer'
    },
    '.cursor-kdio': {
      cursor: 'url("data:image/svg+xml;utf8,") 16 16, pointer'
    },
    '.cursor-b3': {
      cursor: 'url("data:image/svg+xml;utf8,") 16 16, pointer'
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
