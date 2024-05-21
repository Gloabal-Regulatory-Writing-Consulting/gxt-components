import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.div<{ isSearchAble: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019px;
  cursor: pointer;
  color: var(--Neutral-400, #414141);
  margin-bottom: ${({ isSearchAble }) => (isSearchAble ? "0.5rem" : "0.2rem")};
`;

export const Content = styled.div<{ open: boolean }>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.0012em;
  text-align: left;
  display: ${({ open }) => (open ? "block" : "none")};
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const AccordionIcon = styled.span<{ open: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(360deg)" : "rotate(180deg)")};
`;

export const SearchBox = styled.div`
  margin: 0rem 0.125rem 0.5rem 0.125rem;
`;
