import { styled } from "styled-components";


export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 1.2rem;

    background: var(--color-gray-4);
    border-radius: 4px;

    cursor: pointer;

    transition: 0.2s;
    

    & h3 {
        color: var(--color-gray-0);
    }

    & p {
        transition: 0.2s;
    }

    &:hover{
        background: var(--color-gray-2);

        & p {
            color: var(--color-gray-0);
        }
    }
`