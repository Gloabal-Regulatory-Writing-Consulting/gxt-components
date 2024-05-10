import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

export type InputProps = {
  label?: string;
  inputType?: "text" | "password" | "email" | "number";
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: 1px solid #ccc;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => (props.primary ? "grey" : "#000")};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
`;
const StyledLabel = styled.label`
  font-size: 15px;
  display: block;
  margin-bottom: 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Input: React.FC<InputProps> = ({
  label,
  inputType,
  size,
  primary,
  disabled,
  onChange,
  ...props
}) => {
  return (
    <StyledWrapper>
      {label && (
        <StyledLabel data-testid="label" aria-label={label}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        data-testid="input"
        id={label}
        type={inputType}
        onChange={onChange}
        primary={primary}
        disabled={disabled}
        size={size}
        {...props}
      />
    </StyledWrapper>
  );
};

export default Input;
