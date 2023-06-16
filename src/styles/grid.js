import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "1200px")};
  margin: 0 auto;
  padding: 1.2rem;
`;
