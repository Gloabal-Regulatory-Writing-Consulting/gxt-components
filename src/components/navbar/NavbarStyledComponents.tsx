import styled, { css } from "styled-components";

export const LeadingContent = styled.div<{ isExpanded: boolean }>`
  display: flex;
  padding: 1.25rem 0rem 1rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  flex: 1 0 0;

  ${({ isExpanded }) =>
    isExpanded === true &&
    css`
      align-self: stretch;
    `}
`;

export const Header = styled.img<{ isExpanded: boolean }>`
  ${({ isExpanded }) =>
    isExpanded === true
      ? css`
          max-width: 13.7rem;
        `
      : css`
          max-width: inherit;
        `}
`;

export const HeaderContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  padding: 0rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  transition: width 0.5s;
  height: 2rem;

  ${({ isExpanded }) =>
    isExpanded === true
      ? css`
          align-items: center;
          max-width: 15.7rem;
        `
      : css`
          align-items: flex-start;
          max-width: 2rem;
        `}
`;

export const Sidebar = styled.div<{ isExpanded: boolean }>`
  height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--system-50, #ffffff);
  transition: width 0.5s;

  ${({ isExpanded }) =>
    isExpanded === true
      ? css`
          display: inline-flex;
          width: 15.7rem;
        `
      : css`
          display: flex;
          width: 5rem;
        `}
`;

export const NavList = styled.div<{ isExpanded: boolean }>`
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex: 1 0 0;
  list-style-type: none;

  ${({ isExpanded }) =>
    isExpanded === false &&
    css`
      align-self: stretch;
    `}
`;

export const FooterContent = styled.ul<{ isExpanded: boolean }>`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  align-self: stretch;
  align-items: flex-start;
  list-style-type: none;
`;
