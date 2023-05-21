// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    min-height:1000px;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  #root, body {
    background-color: ${(props) => props.theme.colors.background};
  }
  p {
    color: ${(props) => props.theme.colors.accent}
  }
`;

export default GlobalStyle;
