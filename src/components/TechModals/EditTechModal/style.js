import { styled } from "styled-components";

export const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    & button[type=submit] {
      padding: 1.5rem 3.6rem;
    }

    @media (max-width: 368px) {
      & button {
      width: 100%;
    }
  }
`