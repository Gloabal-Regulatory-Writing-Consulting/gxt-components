import React, { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import {
  StyledHelpText,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from "./Input.styles";

export type CustomStylesType = {
  container?: CSSProperties;
  label?: CSSProperties;
  input?: CSSProperties;
  helpText?: CSSProperties;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: ReactNode;
  inputType?: "text" | "password" | "email" | "number";
  primary?: boolean;
  inputSize?: "small" | "medium" | "large";
  customStyles?: CustomStylesType;
  disabled?: boolean;
  isFilled?: boolean;
  error?: boolean;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  inputType,
  size,
  primary,
  disabled,
  customStyles = {},
  helpText = "",
  id,
  error = false,
  isFilled = false,
  ...props
}) => {
  return (
    <StyledWrapper style={customStyles.container} error={error}>
      {label && (
        <StyledLabel
          htmlFor={id || label}
          data-testid="label"
          aria-label={label}
          style={customStyles.label}
          error={error}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        $isFilled={!!props.value || isFilled}
        error={error}
        data-testid="input"
        id={id || label}
        type={inputType}
        primary={primary}
        disabled={disabled}
        autoComplete={props.autoComplete || "off"}
        size={size}
        style={customStyles.input}
        {...props}
      />
      {helpText && (
        <StyledHelpText style={customStyles.helpText} error={error}>
          {helpText}
        </StyledHelpText>
      )}
    </StyledWrapper>
  );
};

export default Input;
