import React, { FC } from "react";
import Navitem, { NavItemProps } from "../Navitem";

const Example: FC<NavItemProps> = ({
  navigateTo,
  text,
  Icon,
  className,
  isExpanded,
  isLinkActive,
}) => {
  return (
    <Navitem
      navigateTo={navigateTo}
      text={text}
      Icon={Icon}
      className={className}
      isExpanded={isExpanded}
      isLinkActive={isLinkActive}
    />
  );
};

export default Example;
