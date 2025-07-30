import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'TalkFont';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.1/SangSangShinb7.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Pretendard', sans-serif, 'TalkFont';
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
