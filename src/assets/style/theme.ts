import type { DefaultTheme } from 'styled-components';

const fontSize: DefaultTheme['fontSize'] = {
  normal: '16px',
  big: '18px',
  huge: '24px',
};

const gradient: DefaultTheme['colors']['gradient'] = {
  background: ['#687681', '#8795a0'],
};

export const lightTheme: DefaultTheme = {
  fontSize,
  colors: {
    background: '#fcfcfc',
    text: '#1f1c27',
    secondBackground: '#cacaca',
    gradient,
  },
};

export const darkTheme: DefaultTheme = {
  fontSize,
  colors: {
    background: '#1a1a1a',
    text: '#ffffff',
    secondBackground: '#282828',
    gradient,
  },
};
