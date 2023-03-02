import { createGlobalStyle } from 'styled-components'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    color: white;
  }
  html,
  body {
    background: linear-gradient(to bottom, #010409 0%, #021840 100%);
    height: 100%;
    font-size: min(calc(0.6em + 1vw), 20px);
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
