import { css, styled } from "styled-components";

export const StyledFlex = css`
  display: flex;
  flex-direction: column;
`;

export const StyledLoginFormContainer = styled.div`
  ${StyledFlex}
  gap: 22px;

  width: 100%;
  background: var(--color-gray-3);
  border-radius: 4px;
  padding: 4.2rem 2.2rem;

  & h1 {
    align-self: center;
  }
`;

export const StyledForm = styled.form`
  ${StyledFlex}
  gap: 20px;
`;

export const StyledFormFooter = styled.div`
  ${StyledFlex}
  gap: 22px;

  & p {
    margin-top: 1.2rem;
    align-self: center;
  }

  & button {
    width: 100%;
  }
`;
