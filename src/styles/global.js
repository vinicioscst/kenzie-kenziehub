import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
	    --color-primary: #ff577f;
	    --color-primary-50: #ff427f;
	    --color-primary-disable: #59323f;
	    --color-gray-4: #121214;
	    --color-gray-3: #212529;
	    --color-gray-2: #343b41;
	    --color-gray-1: #868e96;
	    --color-gray-0: #f8f9fa;
	    --color-sucess: #3fe864;
	    --color-negative: #e83f5b;

        font-size: 62.5%;
    }

    * {
        font-family: 'Inter', sans-serif;
    }

    body{
        background: var(--color-gray-4);
        color: var(--color-gray-1);
    }
`;
