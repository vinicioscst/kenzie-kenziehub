import { styled } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100dvh;
  background: #12121480;
`;

export const StyledModalContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 370px;
  margin: 0 1rem;
`;

export const StyledModalHeader = styled.div`
  background: var(--color-gray-2);
  border-radius: 4px 4px 0px 0px;
`;

export const StyledModalContent = styled.div`
  background: var(--color-gray-3);
  border-radius: 0px 0px 4px 4px;
`;