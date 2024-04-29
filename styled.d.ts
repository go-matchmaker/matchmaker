import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkGreen: string;
      white: string;
      mainGrey: string;
      mainGreen: string;
      darkGrey: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
    };
  }
}
