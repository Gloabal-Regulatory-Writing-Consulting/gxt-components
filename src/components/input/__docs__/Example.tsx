import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<InputProps> = ({
  label = "This is a label",
  disabled = false,
  onChange = () => {},
  primary = true,
  size = "small",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Input
        label={label}
        size={size}
        disabled={disabled}
        onChange={onChange}
        primary={primary}
      />
    </div>
  );
};

export default Example;
