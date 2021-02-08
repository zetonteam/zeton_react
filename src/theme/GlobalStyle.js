import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');
 
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 14px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;
