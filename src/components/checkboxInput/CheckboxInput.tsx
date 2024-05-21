import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";

export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large";
  indeterminate?: boolean;
}

const StyledInput = styled.input<CheckboxInputProps>`
  border: 1px solid var(--neutral-50, #9ca3af);
  line-height: 1;
  cursor: pointer;
  border-radius: 25%;
  display: inline-block;
  appearance: none;
  padding: ${(props) =>
    props.inputSize === "small"
      ? "0.875rem"
      : props.inputSize === "medium"
        ? "1rem"
        : "1.25rem"};
  background-size: ${(props) =>
    props.inputSize === "small"
      ? "1rem"
      : props.inputSize === "medium"
        ? "1.25rem"
        : "1.5rem"};
  &:hover {
    border: 1px solid var(--primary-300, #115873);
  }

  &:active {
    border: 1px solid var(--primary-400, #0a3a4c);
  }

  &:checked {
    background-image: url("./checked.svg");
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: var(--primary-200, #177ba6);
    border: 1px solid var(--primary-200, #177ba6);

    &:hover {
      background-color: var(--primary-300, #115873);
      border: 1px solid var(--primary-300, #115873);
    }

    &:active {
      border: 1px solid var(--primary-400, #0a3a4c);
      background-color: var(--primary-400, #0a3a4c);
    }

    &:disabled {
      background-color: var(--neutral-50, #9ca3af);
      border: 1px solid var(--neutral-50, #f9fafb);
    }
  }

  &:indeterminate {
    background-image: url("./indeterminate-checked.svg");
    background-repeat: no-repeat;
    background-color: var(--primary-200, #177ba6);
    background-position: 50%;
    border: 1px solid var(--primary-200, #177ba6);
    &:hover {
      background-color: var(--primary-300, #115873);
      border: 1px solid var(--primary-300, #115873);
    }

    &:active {
      border: 1px solid var(--primary-400, #0a3a4c);
      background-color: var(--primary-400, #0a3a4c);
    }

    &:disabled {
      background-color: var(--neutral-50, #9ca3af);
      border: 1px solid var(--neutral-50, #f9fafb);
    }
  }
  &:disabled {
    background-color: var(--neutral-50, #f9fafb);
    border: 1px solid var(--neutral-50, #9ca3af);
  }
`;

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  indeterminate = false,
  inputSize,
  checked,
  ...props
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <StyledInput
      {...props}
      ref={checkboxRef}
      data-testid="checkbox-input"
      type="checkbox"
      autoComplete={props.autoComplete || "off"}
      inputSize={inputSize}
      checked={!indeterminate && checked}
    />
  );
};

export default CheckboxInput;
