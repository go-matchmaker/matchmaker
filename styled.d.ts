import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkGreen: string;
      white: string;
      menuGrey: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
    };
  }
}
