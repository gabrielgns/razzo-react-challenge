import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body,
html,
#root {
box-sizing: border-box;
height: 100%;
width: 100%;
margin: 0;
padding: 0;
background: #fff;
font-family: ABeeZee;
}

button {
cursor: pointer;
}
`;

export default GlobalStyle;
