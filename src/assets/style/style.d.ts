import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: '#fcfcfc'|'#1a1a1a'
      text: '#1f1c27'|'#ffffff'
      secondBackground: '#fcfcfc'|'#2c2d2e'
      gradient: {
        background: ['#687681', '#8795a0']|['#1a1a1a', '#2c2d2e']
      }
    }
    fontSize: {
      normal: '16px',
      big: '18px',
      huge: '24px'
    }
  }
}

