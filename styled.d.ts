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
    headerFontSizes: {
      default: string;
      laptopL: string;
      laptop: string;
      tablet: string;
      mobile: string;
    };
    subFontSizes: {
      default: string;
      laptopL: string;
      laptop: string;
      tablet: string;
      mobile: string;
    };
    fontSizes: {
      default: string;
      laptopL: string;
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
