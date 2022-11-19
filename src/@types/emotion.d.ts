import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      compliment: string;
      dominant: string;
      accent: string;
      compliment50: string;
      dominant50: string;
      accent50: string;
      success: string;
      danger: string;
    };
  }
}
