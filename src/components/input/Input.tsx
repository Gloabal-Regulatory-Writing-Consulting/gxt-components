import React, { CSSProperties, InputHTMLAttributes } from "react";
import styled from "styled-components";

export type CustomStylesType = {
  container?: CSSProperties;
  label?: CSSProperties;
  input?: CSSProperties;
};

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
  label?: string;
  inputType?: "text" | "password" | "email" | "number";
  primary?: boolean;
  inputSize?: "small" | "medium" | "large";
  customStyles?: CustomStylesType;
}

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 0.0625rem solid #ccc;
  line-height: 1;
  font-size: 0.9375rem;
  cursor: pointer;
  border-radius: 0.625rem;
  display: inline-block;
  color: ${(props) => (props.primary ? "grey" : "#000")};
  padding: ${(props) =>
    props.inputSize === "small"
      ? "0.4375rem 1.5625rem 0.5rem"
      : props.inputSize === "medium"
        ? "0.5625rem 1.875rem 0.6875rem"
        : "0.875rem 1.875rem 1rem"};
`;

const StyledLabel = styled.label`
  font-size: 0.9375rem;
  display: block;
  margin-bottom: 0.3125rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.625rem;
`;

const Input: React.FC<InputProps> = ({
  label,
  inputType,
  size,
  primary,
  disabled,
  customStyles = {},
  ...props
}) => {
  return (
    <StyledWrapper style={customStyles.container}>
      {label && (
        <StyledLabel
          data-testid="label"
          aria-label={label}
          style={customStyles.label}
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        data-testid="input"
        id={label}
        type={inputType}
        primary={primary}
        disabled={disabled}
        autoComplete={props.autoComplete || "off"}
        size={size}
        style={customStyles.input}
        {...props}
      />
    </StyledWrapper>
  );
};

export default Input;
