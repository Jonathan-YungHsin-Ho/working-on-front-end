import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
  }

  html{
    font-size: 62.5%;
  }

  body {
    /* background-color: #f8fdff; */

    line-height: 1.5;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }
}
`;

export default GlobalStyle;
