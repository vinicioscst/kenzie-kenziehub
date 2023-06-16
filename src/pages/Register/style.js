import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledRegisterContainer = styled(StyledContainer)`
  margin-top: calc(80px - 1.2rem);
  gap: clamp(2rem, 4vw, 3.5rem);
`;

export const StyledContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  width: 100%;

  & img {
    width: clamp(100px, 15vw, 145px);
  }
`;
