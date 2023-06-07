import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      socialLink: string;
      socialLinkHover: string;
    };
    spacing: {
      xs: string;
      s: string;
      m: string;
      l: string;
    };
    fontSizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      p: string;
    };
  }
}
