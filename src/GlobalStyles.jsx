import { createGlobalStyle } from "styled-components";
import PoppinsMedium from "./assets/fonts/Poppins-Light.ttf"
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url(${PoppinsMedium});
  }

  html,body {
    font-size: 14px;
    font-weight: 300;
    font-family: Poppins,sans-serif;
  }
`

export default GlobalStyles;