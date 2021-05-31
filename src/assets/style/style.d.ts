import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: '#fcfcfc'
      text: '#1f1c27'
      secondBackground: '#fcfcfc'
      gradient: {
        background: ['#687681', '#8795a0']
      }
    }
    fontSize: {
      normal: '16px',
      big: '18px',
      huge: '24px'
    }
  }
}

