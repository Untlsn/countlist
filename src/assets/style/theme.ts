import type { DefaultTheme } from 'styled-components';

const fontSize: DefaultTheme['fontSize'] = {
  normal: '16px',
  big: '18px',
  huge: '24px',
};

export const lightTheme: DefaultTheme = {
  fontSize,
  colors: {
    background: '#fcfcfc',
    text: '#1f1c27',
    secondBackground: '#cacaca',
  },
};

export const darkTheme: DefaultTheme = {
  fontSize,
  colors: {
    background: '#181818',
    text: '#ffffff',
    secondBackground: '#282828',
  },
};
