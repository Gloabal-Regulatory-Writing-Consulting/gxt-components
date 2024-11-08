import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  overflow: visible;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019px;
  cursor: pointer;
  color: var(--neutral-400, #414141);
  margin-bottom: 0.5rem;
`;

export const Content = styled.div<{ open: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.0012em;
  text-align: left;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
`;

export const Box = styled.div<{ open: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.0012em;
  text-align: left;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
`;

export const AccordionIcon = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(360deg)" : "rotate(180deg)"};
`;

export const SearchBox = styled.div`
  margin: 0rem 0.125rem 0.5rem 0.125rem;
`;
