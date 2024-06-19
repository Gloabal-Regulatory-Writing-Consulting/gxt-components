import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 2.75rem;
  height: 1.5rem;
  padding: 0.125rem 0.3125rem;
`;

export const SwitchInput = styled.input<{ oncolor: string }>`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${({ oncolor }) => oncolor};
  }

  &:checked + span:hover {
    background-color: var(--primary-300, #115873);
  }

  &:checked:disabled + span {
    background-color: var(--neutral-50, #f9fafb);
  }
  &:checked + span:before {
    transform: translateX(1.625rem);
  }
`;

export const SwitchSlider = styled.span<{
  offcolor: string;
  checked: boolean;
  disabled: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 1.25rem;
  padding: 0.125rem;
  background-color: ${({ offcolor }) => offcolor};

  border: ${({ checked }) =>
    checked
      ? "var(--primary-200, #177ba6) 1px solid"
      : "var(--neutral-200, #9CA3AF) 1px solid"};

  &:before {
    position: absolute;
    content: "";
    height: 1.25rem;
    width: 1.25rem;
    transition: 0.4s;
    border-radius: 50%;
    border: ${({ checked }) =>
      checked ? "#fff 1px solid" : "var(--neutral-200, #9CA3AF) 1px solid"};
    background-color: ${({ checked }) =>
      checked ? "#fff" : "var(--neutral-100, #e5e7eb)"};

    ${SwitchInput}:disabled + & {
      background-color: var(--neutral-50, #f9fafb);
      border-color: var(--neutral-200, #9ca3af);
    }
  }

  ${SwitchInput}:disabled + & {
    background-color: var(--neutral-50, #f9fafb);
    cursor: not-allowed;
    border-color: var(--neutral-200, #9ca3af);
  }
  ${SwitchInput}:not(:disabled):hover + & {
    border-color: var(--primary-200, #177ba6);
  }
`;
