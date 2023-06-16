import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 4px;

  font-size: 1.125rem;

  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const MdButtonStyles = css`
  background: var(--color-gray-3);

  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-gray-0);

  &:hover {
    background: var(--color-gray-2);
    color: #ffffff;
  }
`;

export const LgButtonStyles = css`
  padding: 1.5rem 2.2rem;

  font-size: 1.6rem;
  font-weight: 500;
  color: #ffffff;

  ${({ buttoncolor }) => {
    switch (buttoncolor) {
      case "primary":
        return css`
          background: var(--color-primary);

          &:hover {
            background: var(--color-primary-50);
          }

          &:disabled {
            background: var(--color-primary-disabled);
          }
        `;

      case "default":
        return css`
          background: var(--color-gray-1);

          &:hover {
            background: var(--color-gray-2);
          }

          &:disabled {
            background: var(--color-gray-4);
          }
        `;
    }
  }}
`;

export const StyledButtonLg = styled.button`
  ${ButtonStyles};
  ${LgButtonStyles}
`;

export const StyledLinkLg = styled(Link)`
  ${ButtonStyles};
  ${LgButtonStyles}
`;

export const StyledButtonMd = styled.button`
  ${ButtonStyles};
  ${MdButtonStyles}
  padding: 1.15rem 1.6rem;
`;

export const StyledLinkMd = styled(Link)`
  ${ButtonStyles};
  ${MdButtonStyles}
  padding: 1.15rem 1.6rem;
`;

export const StyledButtonIconMd = styled.button`
  ${ButtonStyles};
  ${MdButtonStyles}
  padding: 1.15rem;
`;

export const StyledLinkIconMd = styled(Link)`
  ${ButtonStyles};
  ${MdButtonStyles}
  padding: 1.15rem;
`;
