import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    height: 100vh;
  }
  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    font-size: 1rem;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;