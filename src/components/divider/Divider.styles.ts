import styled from "styled-components";
import { DividerColor } from "./Divider";

export const HorizontalDividerWrapper = styled.div<{
  $color: DividerColor;
}>`
  height: 0.0625rem;

  flex-shrink: 0;

  background-color: ${({ $color }) =>
    $color === "light"
      ? "var(--neutral-200, #9CA3AF)"
      : "var(--neutral-400, #414141)"};
`;

export const VerticalDividerWrapper = styled(HorizontalDividerWrapper)`
  transform: rotate(90deg);
`;
