import { HTMLAttributes, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  TooltipContainer,
  TooltipBox,
} from "./Tooltip.styles";

export type TooltipProps = {
  position?: "top" | "bottom" | "left" | "right";
  tooltipText: string;
  children: React.ReactNode;
  background?: string;
  tooltipTextColor?: string;
  toolToolboxProps?: HTMLAttributes<HTMLDivElement>;
};
function Tooltip({
  position = "right",
  tooltipText,
  children,
  background = "#323131",
  tooltipTextColor = "#fff",
  toolToolboxProps = {},
}: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </TooltipTarget>
      {isHovered && (
        <TooltipContainer position={position}>
          <TooltipBox
            {...toolToolboxProps}
            background={background}
            position={position}
            color={tooltipTextColor}
          >
            {tooltipText}
          </TooltipBox>
        </TooltipContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;
