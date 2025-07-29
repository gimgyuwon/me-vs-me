import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif;
  background-color: #ffffff;
}

h1, h2, h3, h4, h5, h6 {
  font-weight:  bold;
  margin: 0;
}

p {
  font-weight: normal;
  margin: 0
}

a {
  color: inherit;
  text-decoration: none;
}

`;

export default GlobalStyle;
