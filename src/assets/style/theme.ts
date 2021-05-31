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
    secondBackground: '#fcfcfc',
    gradient: {
      background: ['#687681', '#8795a0'],
    },
  },
};

export const darkTheme: DefaultTheme = {
  fontSize,
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    secondBackground: '#2c2d2e',
    gradient: {
      background: ['#1a1a1a', '#2c2d2e'],
    },
  },
};
