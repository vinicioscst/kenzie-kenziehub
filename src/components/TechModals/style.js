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
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem 2rem;

  background: var(--color-gray-2);
  border-radius: 4px 4px 0px 0px;

  & h3 {
    color: var(--color-gray-0);
  }

  & img {
    cursor: pointer;
  }
`;

export const StyledModalContent = styled.div`
  padding: 1.8rem 2rem 3.2rem;

  background: var(--color-gray-3);
  border-radius: 0px 0px 4px 4px;

  & form {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }
`;
