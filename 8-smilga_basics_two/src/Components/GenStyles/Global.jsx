import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
    }
    body {
        background: #051b05;
        color: hsl(192, 100%, 9%);
    }

    p {
        opacity: .6;
        line-height: 1.5;   
    }

    img {
        max-width: 100%;
    }
`;



export default GlobalStyles