import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavItemContainer = styled.div<{ isLinkActive: boolean }>`
  display: flex;
  width: 15.75rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
  gap: 0.75rem;

  ${({ isLinkActive }) =>
    isLinkActive === true &&
    css`
      border-left: solid;
      border-left-width: 0.25rem;
      border-left-color: var(--primary-200, #177ba6);
    `}
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;

export const NavIcon = styled.div`
  display: flex;
  width: 1.5625rem;
  height: 1.5625rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const NavText = styled.p<{ isActive: boolean; isExpanded: boolean }>`
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.00119rem;
  margin: 0;
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  visibility: ${({ isExpanded }) => (isExpanded ? "visible" : "hidden")};
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;

  color: ${({ isActive }) =>
    isActive ? "var(--primary-200, #177BA6)" : "var(--neutral-400, #414141)"};
`;
