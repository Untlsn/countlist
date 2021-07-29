import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '~/assets/style';
import { OnlyChildren } from '~/types/only';

const StyleProvider = ({ children }: OnlyChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
