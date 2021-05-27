import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: '#fcfcfc'|'#181818'
      text: '#1f1c27'|'#ffffff'
      secondBackground: '#cacaca'|'#282828'
    }
    fontSize: {
      normal: '16px',
      big: '18px',
      huge: '24px'
    }
  }
}

