import { createGlobalStyle } from 'styled-components'

const FontStyle = createGlobalStyle`
@font-face {
  font-family: 'Satoshi';
  src: url('https://www.argofinance.money/_next/static/satoshi.woff2') format('woff2');
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
}
`

export default FontStyle
