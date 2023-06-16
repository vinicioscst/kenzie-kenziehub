import { styled } from "styled-components";
import { StyledContainer } from "../../styles/grid";

export const StyledLoginContainer = styled(StyledContainer)`
  margin-top: calc(80px - 1.2rem);
  gap: clamp(2rem, 4vw, 3.5rem);

  & img {
    width: clamp(100px, 15vw, 145px);
  }
`;
