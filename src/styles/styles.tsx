import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles = (): JSX.Element => (
  <Global
    styles={css`
      body {
        font-family: 'Montserrat', sans-serif;
        background-color: #282c34;
      }
    `}
  />
);

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
    };
  }
}

export const light = {
  colors: {
    primary: 'green'
  }
};
