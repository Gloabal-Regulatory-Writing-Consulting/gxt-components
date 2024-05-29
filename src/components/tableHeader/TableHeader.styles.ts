import styled from "styled-components";

export const HeaderTitle = styled.span`
  flex-grow: 1;
`;

export const SortContainer = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex-shrink" : "none")};
  cursor: pointer;
  width: fit-content;
`;

export const ArrowWrapper = styled.div`
  margin-bottom: 2px;
`;

export const HeaderContainer = styled.div<{
  height?: string;
  backgroundColor?: string;
}>`
  height: ${({ height }) => height || "2rem"};
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
