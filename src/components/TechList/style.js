import { styled } from "styled-components";
import { StyledTitle2 } from "../../styles/typography";


export const StyledTechListH2 = styled(StyledTitle2)`
  color: var(--color-gray-0);
`;

export const StyledTechListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
`

export const StyledTechListSection = styled.section`   
    width: 100%;
    padding: 24px;

    background: var(--color-gray-3);
    border-radius: 4px;

    & ul {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }
`