import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: '#ffffff'|'#000000'
      black: '#000000'|'#ffffff'
    }
  }
}

