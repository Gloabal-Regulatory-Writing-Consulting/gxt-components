import styled from "styled-components";
import { DropdownPosition } from "./Dropdown";

export const SelectWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.375rem 0 0 0.375rem;
  border: none;
  background: var(--system-50, #fff);
`;

export const IconWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-left: 1px solid var(--neutral-200, #9ca3af);
  border-radius: 0 0.375rem 0.375rem 0;
  background: var(--system-50, #fff);
  transition: border-color 0.3s;

  ${({ disabled }) =>
    !disabled &&
    `
      &:hover {
        border-color: var(--primary-200, #177ba6);
      }
  `}
`;

export const SelectItemsWrapper = styled.div<{ position?: DropdownPosition }>`
  position: absolute;
  ${({ position }) => {
    return `
    top: ${position === "bottom" ? "100%" : "auto"};
    bottom: ${position === "top" ? "100%" : "auto"};
    ${position === "top" && `margin-bottom: 0.25rem;`};
    ${position === "bottom" && `margin-top: 0.25rem;`};
    `;
  }}
  left: 0;
  border-radius: 0.375rem;
  border: 1px solid var(--neutral-200, #9ca3af);
  background: var(--system-50, #fff);
  max-height: 12.5rem;
  overflow-y: auto;
`;

export const SelectItemWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  align-self: stretch;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--neutral-200, #9ca3af);
  border-bottom: 1px solid var(--system-100, #f3f4f6);

  &:first-child {
    border-radius: 0.375rem 0.375rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.375rem 0.375rem;
    border-bottom: none;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    background-color: var(--primary-100, #cce4f6);
    color: var(--primary-200, #177ba6);
  `}

  &:hover {
    transition: border-color 0.3s;
    color: var(--system-100, #000000);
    background-color: var(--primary-50, #2aace2);
    border-color: var(--primary-200, #177ba6);
  }
`;

export const CustomSelectButton = styled.button<{
  disabled: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  color: var(--neutral-200, #9ca3af);
  border: 1px solid var(--neutral-200, #9ca3af);
  border-radius: 0.375rem;
  padding: 0;
  background: var(--system-50, #fff);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  overflow: hidden;

  &:not(:disabled):hover {
    transition: border-color 0.3s;
    color: var(--primary-200, #177ba6);
    border: 1px solid var(--primary-200, #177ba6);
  }
`;

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
  color: var(--neutral-200, #9ca3af);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019px;
`;
