import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    input, textarea {
        border: 0;
        outline: 0;
    }

    ul, ol{
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;