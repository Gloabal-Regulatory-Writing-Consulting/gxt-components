import styled from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Heading = styled.div<{ disabled?: boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.019px;

  color: ${({ disabled }) =>
    disabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-300, #115873)"};
`;

export const InputContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  padding: 12px 8px;
  width: 320px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid var(--neutral-200, #9ca3af);
  background: ${({ disabled }) =>
    disabled ? "var(--neutral-50, #F9FAFB)" : "var(--system-50, #fff)"};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:focus-within {
    border: ${({ disabled }) =>
      !disabled && "2px solid var(--primary-200, #177BA6)"};
  }
  &:active {
    border: ${({ disabled }) =>
      !disabled && "1px solid var(--neutral-200, #414141)"};
  }
  &:hover {
    border-color: ${({ disabled }) =>
      !disabled && "var(--primary-200, #177BA6)"};
  }
`;

export const TextAreaInput = styled.textarea<{ disabled?: boolean }>`
  padding: 0;
  flex: 1 0 0;
  height: 77px;
  border: none;
  background: none;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  resize: none;
  color: ${({ disabled }) =>
    disabled ? "var(--neutral-200, #9ca3af)" : "inherit"};

  &::placeholder {
    color: var(--neutral-200, #9ca3af);
  }

  &:focus-within::placeholder {
    color: var(--neutral-200, #414141);
  }
`;

export const RectangleContainer = styled.div<{ showPlaceholder: boolean }>`
  display: flex;
  padding: 4px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 32px;
  background: var(--system-50, #fff);
  opacity: ${({ showPlaceholder }) => (showPlaceholder ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const InnerRectangle = styled.div`
  width: 5px;
  align-self: stretch;
  border-radius: 32px;
  background: var(--neutral-100, #e5e7eb);
`;

export const Caption = styled.div`
  align-self: stretch;
  color: var(--neutral-200, #9ca3af);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.014px;
  height: 18px;
`;
