import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
