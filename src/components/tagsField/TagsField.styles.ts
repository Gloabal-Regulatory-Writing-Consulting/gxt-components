import styled, { css } from "styled-components";

export const TagsFieldContainer = styled.div<{
  disabled: boolean;
  error: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 2.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid
    ${({ disabled, error }) =>
      disabled
        ? "var(--Neutral-100, #d0d7dd)"
        : error
          ? "var(--negative-200, #7f1d1d)"
          : " var(--neutral-200, #9ca3af)"};
  background-color: ${({ disabled }) =>
    disabled ? "var(--Neutral-50, #f9fafb)" : "var(--System-50, #fff)"};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  flex-wrap: wrap;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};

  &:hover {
    ${({ error, disabled }) => css`
      border: 1px solid
        ${error
          ? "var(--negative-100, #EF4444)"
          : disabled
            ? "var(--neutral-100, #d0d7dd)"
            : "var(--neutral-400, #177ba6)"};
      color: ${error
        ? "var(--negative-200, #7F1D1D)"
        : "var(--neutral-400, #414141)"};
    `}
  }

  ${({ disabled }) =>
    `background-color: ${disabled ? "var(--neutral-50, #F9FAFB)" : "var(--system-50, #fff)"};`}
`;

export const HelpText = styled.span<{ error?: boolean }>`
  color: ${({ error }) =>
    error ? "var(--negative-200, #7F1D1D)" : "var(--neutral-200, #9ca3af)"};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00088rem;
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
