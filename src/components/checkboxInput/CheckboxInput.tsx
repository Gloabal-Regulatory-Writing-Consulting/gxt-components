import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";

export interface CheckboxInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "extraSmall" | "small" | "medium" | "large";
  label?: string;
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
    props.inputSize === "extraSmall"
      ? "0.475rem"
      : props.inputSize === "small"
        ? "0.875rem"
        : props.inputSize === "medium"
          ? "1rem"
          : "1.25rem"};
  background-size: ${(props) =>
    props.inputSize === "extraSmall"
      ? "0.8rem"
      : props.inputSize === "small"
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

const StyledLabel = styled.label<{ disabled: boolean }>`
  display: block;
  color: ${(props) =>
    props.disabled
      ? `var(--neutral-200, #9ca3af)`
      : `var(--neutral-400, #414141)`};

  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: 0.00119rem;
`;

const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  indeterminate = false,
  inputSize,
  checked,
  label,
  ...props
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <StyledWrapper>
      <StyledInput
        {...props}
        ref={checkboxRef}
        data-testid="checkbox-input"
        type="checkbox"
        autoComplete={props.autoComplete || "off"}
        inputSize={inputSize}
        checked={!indeterminate && checked}
      />
      {label && (
        <StyledLabel
          data-testid="label"
          aria-label={label}
          disabled={!!props.disabled}
        >
          {label}
        </StyledLabel>
      )}
    </StyledWrapper>
  );
};

export default CheckboxInput;
