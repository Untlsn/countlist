import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, theme } from '@style';

export interface StyleProviderProps { children: any, fonts: string[] }

const StyleProvider = ({ children, fonts }: StyleProviderProps) => {
  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {fonts.map(
          (font, key) => <link rel='stylesheet' href={font} key={key} />,
        )}
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StyleProvider;
