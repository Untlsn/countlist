import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, darkTheme, lightTheme } from '@style';
import { useSelector } from 'react-redux';

export interface StyleProviderProps { children: any, fonts: string[] }

const StyleProvider = ({ children, fonts }: StyleProviderProps) => {
  const isDark = useSelector(state => state.mini.isDark);

  return (
    <>
      <Helmet>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {fonts.map(
          (font, key) => <link rel='stylesheet' href={font} key={key} />,
        )}
      </Helmet>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default StyleProvider;
