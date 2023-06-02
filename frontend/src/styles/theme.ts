import { DefaultTheme } from "styled-components";
const ezraYellowRGB = "230, 161, 83";
export const theme: DefaultTheme = {
  spacing: {
    xs: "1rem",
    s: "2rem",
    m: "3rem",
    l: "5rem",
    xl: "7rem",
  },
  colors: {
    ezraYellow: `rgb(${ezraYellowRGB})`,
    ezraYellowOpacity: (opacity) => `rgb(${ezraYellowRGB},${opacity})`,
    accent: "rgb(15, 61, 79)",
    background: "rgb(226, 222, 208)",
    tableRowSecondary: "rgb(240 248 255)",
  },
  sizing: {
    footerHeight: "5rem",
  },
};
