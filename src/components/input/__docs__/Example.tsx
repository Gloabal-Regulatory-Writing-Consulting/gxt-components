import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<InputProps> = ({
  label = "",
  disabled = false,
  onChange = (e) => {
    console.log("onChange", e.target.value);
  },
  primary = true,
  inputSize = "small",
  inputType = "text",
  customStyles,
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
        inputType={inputType}
        label={label}
        inputSize={inputSize}
        disabled={disabled}
        onChange={onChange}
        primary={primary}
        customStyles={customStyles}
      />
    </div>
  );
};

export default Example;
