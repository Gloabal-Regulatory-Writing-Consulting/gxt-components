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
  $isFilled = false,
  helpText = "This is a help text",
  error = false,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10rem",
      }}
    >
      <Input
        inputType={inputType}
        label={label}
        inputSize={inputSize}
        disabled={disabled}
        onChange={onChange}
        primary={primary}
        $isFilled={$isFilled}
        helpText={helpText}
        customStyles={customStyles}
        error={error}
      />
    </div>
  );
};

export default Example;
