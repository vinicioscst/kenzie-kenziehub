import { css, styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";
import { StyledTitle1, StyledTitle2 } from "../../styles/typography";

const FlexAdjustments = css`
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledHomeHeaderContainer = styled(StyledContainer)`
  ${FlexAdjustments}
  padding: 2rem 1.2rem;
`;

export const StyledHomeUserSection = styled.section`
  border-top: 1px solid var(--color-gray-3);
  border-bottom: 1px solid var(--color-gray-3);
`;

export const StyledHomeUserContainer = styled(StyledContainer)`
  ${FlexAdjustments}
  padding: 4.5rem 1.2rem;
`;

export const StyledHomeH1 = styled(StyledTitle1)`
  color: var(--color-gray-0);
`;

export const StyledHomeH2 = styled(StyledTitle2)`
  color: var(--color-gray-0);
  font-weight: 400;
`;

export const StyledHomeContentContainer = styled(StyledContainer)`
  padding: 3.7rem 1.2rem;
  gap: 2.3rem;
  align-items: flex-start;
`;
