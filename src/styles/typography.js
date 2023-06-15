import styled, { css } from "styled-components";

const TextDefaultStyles = css`
  font-style: normal;
  text-decoration: none;
  text-transform: none;
`;

export const StyledTitle1 = styled.h1`
    ${TextDefaultStyles}
    font-size: 1.8rem;
    line-height: 2.7rem;
    font-weight: 700;
    color: var(--color-grey-0);
`;

export const StyledTitle2 = styled.h2`
    ${TextDefaultStyles}
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: var(--color-grey-0);
`;

export const StyledTitle3 = styled.h3`
    ${TextDefaultStyles}
    font-size: 1.4rem;
    line-height: 2.1rem;
    font-weight: 700;
    color: var(--color-grey-0);
`;

export const StyledHeadline = styled.p`
    ${TextDefaultStyles}
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: var(--color-grey-0);
`;

export const StyledHeadlineBold = styled.p`
    ${TextDefaultStyles}
    font-style: bold;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: var(--color-grey-0);
`;

export const StyledHeadlineItalic = styled.p`
    ${TextDefaultStyles}
    font-style: italic;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: var(--color-grey-0);
`;