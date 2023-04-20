import styled from "styled-components";
import { devices } from "../../styles/devices";
const book1Color = "#942343";
const pageColor = "#fffff0";
const ribbon1Color = "#ff785b";
const bookCutColor = "#a0d8ef";
const book2Color = "#a688bd";
const bookBarColor = "#fff";
const book3Border = "#004d25";
const ribbon3Color = "#a4d5bd";
const book4Color = "#ed6d35";
const book5Color = "#0073a8";
const book6Color = "#622d18";
const book7Color = "#fcc800";

export const BookContainer = styled.div`
  font-size: 5px;
  height: fit-content;
  width: 25em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -3px;
  @media ${devices.tablet} {
    font-size: 6px;
  }
  @media ${devices.laptop} {
    font-size: 7px;
  }
`;
export const Book1 = styled.div`
  position: relative;
  height: 3em;
  width: 14em;
  border: 0.5em solid ${book1Color};
  border-radius: 1em 0 0 1em;
  border-right-style: none;
  background: ${pageColor};
`;
export const Ribbon1 = styled.div`
  height: 2.5em;
  width: 2em;
  background: ${ribbon1Color};
  position: absolute;
  margin: 1.2em 0 0 0.95em;
`;
export const BookCut = styled.div`
  background: ${bookCutColor};
  margin: 0 0 0 97%;
  width: 0.5em;
  height: 3em;
`;
export const Book2 = styled.div`
  position: relative;
  height: 4em;
  width: 12em;
  background: ${book2Color};
  :before,
  :after {
    content: "";
    position: absolute;
  }
  :before {
    height: 4em;
    width: 6em;
    left: 1em;
    border-left: 2em double ${bookBarColor};
    border-right: 2em double ${bookBarColor};
  }
  :after {
    background: white;
    margin: 5% 0 0 39%;
    width: 3em;
    height: 2em;
  }
`;
export const RibbonCut1 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 0.2em;
  border-left: 0px solid ${ribbon1Color};
  border-right: 1em solid transparent;
  border-top: 1.2em solid ${ribbon1Color};
`;
export const RibbonCut2 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 1.2em;
  border-left: 1em solid transparent;
  border-right: 0px solid ${ribbon1Color};
  border-top: 1.2em solid ${ribbon1Color};
`;
export const RibbonCut3 = styled.div`
  position: absolute;
  margin: 0 0 0 0.2em;
  height: 0.5em;
  width: 2em;
  background: ${ribbon1Color};
`;
export const Book3 = styled.div`
  position: relative;
  height: 3em;
  width: 14em;
  margin-left: 1em;
  border: 0.5em solid ${book3Border};
  border-radius: 0 1em 1em 0;
  border-left-style: none;
  background: ${pageColor};
`;
export const Ribbon3 = styled.div`
  height: 2.5em;
  width: 2em;
  position: absolute;
  background: ${ribbon3Color};
  margin: 1em 0 0 11.45em;
`;
export const BookCut3 = styled.div`
  background: ${bookCutColor}; //#a0d8ef;
  width: 0.5em;
  height: 3em;
`;
export const Book4 = styled.div`
  position: relative;
  height: 3.5em;
  width: 16em;
  background: ${book4Color};
  :before,
  :after {
    position: absolute;
    content: "";
  }

  :before {
    height: 3.5em;
    width: 9.8em;
    left: 1em;
    border-left: 2em double ${bookBarColor};
    border-right: 2em double ${bookBarColor};
  }

  :after {
    background: white;
    margin: 4% 0 0 37%;
    width: 4em;
    height: 2em;
  }
`;
export const RibbonCut4 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 12.7em;
  border-left: 0px solid ${ribbon3Color};
  border-right: 1em solid transparent;
  border-top: 1.2em solid ${ribbon3Color};
`;
export const RibbonCut5 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 13.7em;
  border-left: 1em solid transparent;
  border-right: 0px solid ${ribbon3Color};
  border-top: 1.2em solid ${ribbon3Color};
`;
export const RibbonCut6 = styled.div`
  position: absolute;
  margin: 0 0 0 12.7em;
  height: 0.5em;
  width: 2em;
  background: ${ribbon3Color};
`;
export const Book5 = styled.div`
  position: relative;
  height: 4em;
  width: 14.5em;
  background: ${book5Color};
  :before,
  :after {
    position: absolute;
    content: "";
  }

  :before {
    height: 4em;
    width: 8em;
    left: 1.2em;
    border-left: 2em double ${bookBarColor};
    border-right: 2em double ${bookBarColor};
  }

  :after {
    background: white;
    margin: 5% 0 0 39%;
    width: 3em;
    height: 2em;
  }
`;
export const Book6 = styled.div`
  position: relative;
  height: 3em;
  width: 16.5em;
  border: 0.5em solid ${book6Color};
  border-radius: 0 1em 1em 0;
  border-left-style: none;
  background: ${pageColor};
`;
export const Ribbon6 = styled.div`
  height: 2.5em;
  width: 2em;
  position: absolute;
  background: ${ribbon3Color}; //#a4d5bd;
  margin: 1.4em 0 0 11em;
`;
export const BookCut6 = styled.div`
  background: ${bookCutColor};
  width: 0.5em;
  height: 3em;
`;
export const Book7 = styled.div`
  position: relative;
  height: 4em;
  width: 20em;
  margin-bottom: 3px;
  background: ${book7Color};
  :before,
  :after {
    position: absolute;
    content: "";
  }

  :before {
    height: 4em;
    width: 9.8em;
    left: 1em;
    border-left: 2em double ${bookBarColor};
  }

  :after {
    background: white;
    margin: 4% 0 0 82%;
    width: 2.2em;
    height: 2.2em;
    border-radius: 1.2em;
  }
`;
export const RibbonCut7 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 12.5em;
  border-left: 0px solid ${ribbon3Color};
  border-right: 1em solid transparent;
  border-top: 1.2em solid ${ribbon3Color};
`;
export const RibbonCut8 = styled.div`
  position: absolute;
  margin: 0.5em 0 0 13.5em;
  border-left: 1em solid transparent;
  border-right: 0px solid ${ribbon3Color};
  border-top: 1.2em solid ${ribbon3Color};
`;
export const RibbonCut9 = styled.div`
  position: absolute;
  margin: 0 0 0 12.5em;
  height: 0.5em;
  width: 2em;
  background: ${ribbon3Color};
`;
