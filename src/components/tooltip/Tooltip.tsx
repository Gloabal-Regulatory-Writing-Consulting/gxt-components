import { HTMLAttributes, useState } from "react";
import {
  TooltipWrapper,
  TooltipTarget,
  TooltipContainer,
  TooltipBox,
  Position,
} from "./Tooltip.styles";

export type TooltipProps = {
  position?: Position;
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
  background = "var(--Global-Tokens-System-50, #FFF)",
  tooltipTextColor = "var(--Global-Tokens-Neutral-300, #4B5563)",
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
