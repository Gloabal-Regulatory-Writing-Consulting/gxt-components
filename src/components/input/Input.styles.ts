import { CSSProperties, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

export type CustomStylesType = {
  container?: CSSProperties;
  label?: CSSProperties;
  input?: CSSProperties;
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
}

export const StyledInput = styled.input<InputProps & { $isFilled: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  color: var(--neutral-200, #9ca3af);
  text-overflow: ellipsis;
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00119rem;
  outline: none;

  ${({ error, $isFilled }) => css`
    border: 1px solid
      ${error ? "var(--negative-200, #7f1d1d)" : " var(--neutral-200, #9ca3af)"};
    color: ${error
      ? "var(--negative-200, #7F1D1D)"
      : $isFilled
        ? "var(--neutral-400, #414141)"
        : "var(--neutral-200, #9ca3af)"};
  `}

  &:hover {
    ${({ error }) => css`
      border: 1px solid
        ${error
          ? "var(--negative-100, #EF4444)"
          : "var(--neutral-400, #177ba6)"};
      color: ${error
        ? "var(--negative-200, #7F1D1D)"
        : "var(--neutral-400, #414141)"};
    `}
  }

  &:focus {
    ${({ error }) => css`
      border: ${error
        ? "2px solid var(--negative-100, #EF4444)"
        : "2px solid var(--neutral-400, #177ba6)"};
      color: ${error
        ? "var(--negative-200, #7F1D1D)"
        : "var(--neutral-400, #414141)"};
    `}
    padding: calc(0.5rem - 1px) calc(0.75rem - 1px);
  }

  &:active {
    ${({ error }) => css`
      padding: ${error
        ? "calc(0.5rem - 1px) calc(0.75rem - 1px)"
        : "0.5rem 0.75rem"};
      border: ${error
        ? "2px solid var(--negative-200, #7f1d1d)"
        : "1px solid var(--neutral-400, #414141)"};
      color: ${error
        ? "var(--negative-200, #7F1D1D)"
        : "var(--neutral-400, #414141)"};
    `}
  }

  ${({ disabled }) =>
    `background: ${disabled ? "var(--neutral-50, #F9FAFB)" : "var(--system-50, #fff)"};`}
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
  error?: boolean;
}>`
  color: ${({ disabled, error }) =>
    disabled
      ? "var(--neutral-200, #9CA3AF)"
      : error
        ? "var(--negative-200, #7F1D1D)"
        : "var(--primary-300, #115873)"};
`;

export const StyledWrapper = styled.div<{ error?: boolean }>`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const StyledHelpText = styled.span<{ error?: boolean }>`
  color: ${({ error }) =>
    error ? "var(--negative-200, #7F1D1D)" : "var(--neutral-200, #9ca3af)"};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00088rem;
`;
