// globalStyles.js
import { createGlobalStyle } from "styled-components";
import { devices } from "./devices";

const GlobalStyle = createGlobalStyle`
  body {
    min-height:1000px;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  #root, body {
    background-color: ${(props) => props.theme.colors.background};
  }
  p,a, h1,h2,h3,h4 {
    color: ${(props) => props.theme.colors.accent};
    font-family: "Open Sans"
  }
  h1, h2{

    font-family: "Dekko", cursive;
  }
  h1 {

    font-size: 2rem;
  @media ${devices.mobileL} {
    font-size: 2.5rem;
  }
  @media ${devices.tablet} {
    font-size: 3rem;
  }
  @media ${devices.laptop} {
    font-size: 4rem;
  }
  }
  h2 {
    font-size: 1rem;
  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
  @media ${devices.tablet} {
    font-size: 2rem;
  }
  @media ${devices.laptop} {
    font-size: 3rem;
  }
  }
  h3 {
    font-size: 1.5rem;
  @media ${devices.mobileL} {
    font-size: 1.25rem;
  }
  @media ${devices.tablet} {
    font-size: 1.75rem;
  }
  @media ${devices.laptop} {
    font-size: 2.5rem;
  }
  }
`;

export default GlobalStyle;
