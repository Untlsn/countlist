import type { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
};

export const lightTheme: DefaultTheme = {
  ...theme,
};

export const darkTheme: DefaultTheme = {
  ...theme,
  colors: {
    white: '#000000',
    black: '#ffffff',
  },
};
