import React from "react";
import { BadgeContainer, BadgeVariantType } from "./Badge.styles";

import CheckMarkIcon from "../../assets/icons/checkMarkIcon.svg";
import CrossIcon from "../../assets/icons/crossIcon.svg";

export type BadgeProps = {
  label: string;
  type?: BadgeVariantType;
  className?: string;
  showIcon?: boolean;
};

const Badge: React.FC<BadgeProps> = ({
  type = "basic",
  label,
  className = "",
  showIcon = true,
}) => {
  return (
    <BadgeContainer type={type} className={className}>
      {label}
      {showIcon && (type === "basic" || type === "disabled") && (
        <CrossIcon data-testid="cross-icon" />
      )}
      {showIcon && type === "autosave" && (
        <CheckMarkIcon data-testid="checkmark-icon" />
      )}
    </BadgeContainer>
  );
};

export default Badge;
