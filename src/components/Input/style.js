import { styled } from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledInput = styled.input`
  background: var(--color-gray-2);
  width: 100%;
  padding: 1rem 1.6rem;

  border: 1.22px solid transparent;
  border-radius: 4px;

  font-size: 1.6rem;
  color: var(--color-gray-0);

  transition: 0.2s;

  &:hover {
    border: 1.22px solid var(--color-gray-1);
  }

  &:focus {
    border: 1.22px solid var(--color-gray-0);
  }

  &::placeholder {
    color: var(--color-gray-1);
  }
`;
