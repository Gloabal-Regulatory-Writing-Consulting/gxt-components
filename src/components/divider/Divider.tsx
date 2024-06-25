import { HTMLAttributes } from "react";
import {
  HorizontalDividerWrapper,
  VerticalDividerWrapper,
} from "./Divider.styles";

export type DividerLayout = "horizontal" | "vertical";
export type DividerColor = "light" | "medium";

export type DividerProps = {
  layout?: DividerLayout;
  color?: DividerColor;
  dataTestId?: string;
} & HTMLAttributes<HTMLDivElement>;

function Divider({
  layout = "horizontal",
  color = "light",
  dataTestId = "divider",
  ...rest
}: DividerProps) {
  const DividerWrapper =
    layout == "horizontal" ? HorizontalDividerWrapper : VerticalDividerWrapper;
  return <DividerWrapper $color={color} {...rest} data-testid={dataTestId} />;
}

export default Divider;
