import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkGreen: string;
      white: string;
      menuGrey: string;
    };
  }
}
