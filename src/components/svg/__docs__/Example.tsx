import React, { FC } from "react";
import SvgIcon, { SvgIconProps } from "../SvgIcon";

const Example: FC<SvgIconProps> = ({ size, iconType }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <SvgIcon size={size} iconType={iconType} />
    </div>
  );
};

export default Example;
