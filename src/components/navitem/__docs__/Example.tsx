import React, { FC } from "react";
import Navitem, { NavItemProps } from "../Navitem";

const Example: FC<NavItemProps> = ({
  permission,
  text,
  Icon,
  className,
  isExpanded,
}) => {
  return (
    <Navitem
      permission={permission}
      text={text}
      Icon={Icon}
      className={className}
      isExpanded={isExpanded}
    />
  );
};

export default Example;
