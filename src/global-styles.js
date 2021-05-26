import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: #333333;
    background-color: #fff;
  }
`
export default GlobalStyles
