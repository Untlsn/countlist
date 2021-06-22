import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #9E9E9E4D;
    }

    &::-webkit-scrollbar-thumb {
      background: #9e9e9e;
      border-radius: 15px;

      &:hover {
        background: #cdcdcd;
        border-left: 5px solid #cdcdcd;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
