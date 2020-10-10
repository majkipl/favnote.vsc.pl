import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; //happy rems : 1rem == 10px
    }

    body {
        font-family: "Montserrat", sans-serif;
        font-size: 16px; /* px fallback */
        font-size: 1.6rem; /* default font-size for document */
        line-height: 1.5; /* a nice line-height */

    //color: ${(props) => (props.whiteColor ? "white" : "black")};
    }
`;

export default GlobalStyle;
