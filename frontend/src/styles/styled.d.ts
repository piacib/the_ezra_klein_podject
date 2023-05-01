// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    colors: {
      [k: string]: string;
    };
    sizing: {
      [k: string]: string;
    };
  }
}
