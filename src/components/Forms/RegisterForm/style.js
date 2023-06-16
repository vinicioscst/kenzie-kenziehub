import { css, keyframes, styled } from "styled-components";
import { StyledHeadline, StyledTitle1 } from "../../../styles/typography";

export const StyledFlex = css`
  display: flex;
  flex-direction: column;
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const StyledRegisterFormContainer = styled.div`
  ${StyledFlex}
  gap: 22px;

  width: 100%;
  background: var(--color-gray-3);
  border-radius: 4px;
  padding: 4.2rem 2.2rem;
`;

export const StyledForm = styled.form`
  ${StyledFlex}
  gap: 20px;
`;

export const StyledTitle = styled(StyledTitle1)`
  align-self: center;
  color: var(--color-gray-0);
`;

export const StyledSubtitle = styled(StyledHeadline)`
  align-self: center;
`;
