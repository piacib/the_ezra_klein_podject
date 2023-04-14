// import original module declarations
import "styled-components";
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    MediaQuery: {
      smallPhone: string;
      phone: string;
      tablet: string;
      smallLaptop: string;
      laptop: string;
      largeLaptop: string;
    };
    spacing: {
      xS: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
