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
  border-radius: 0.375rem;
  border: 1px solid var(--neutral-200, #9ca3af);
  margin-top: 8px;
  background: var(--system-50, #fff);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-height: 12.5rem;
  overflow-y: auto;
  ${({ position }) => position && position === "bottom" && `bottom: 45px;`}
`;

export const SelectItemWrapper = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border: none;
  cursor: pointer;

  color: var(--neutral-200, #9ca3af);
  border-bottom: 1px solid var(--system-100, #f3f4f6);

  &:first-child {
    border-radius: 0.375rem 0.375rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.375rem 0.375rem;
    border-bottom: none;
  }

  &:hover {
    transition: border-color 0.3s;
    color: var(--primary-200, #177ba6);
    background-color: var(--system-100, #f3f4f6);
    border-color: var(--primary-200, #177ba6);
  }
`;

export const CustomSelectButton = styled.button<{
  disabled: boolean;
}>`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  width: auto;
  color: var(--neutral-200, #9ca3af);
  border: 1px solid var(--neutral-200, #9ca3af);
  border-radius: 0.375rem;
  padding: 0;
  background: var(--system-50, #fff);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      transition: border-color 0.3s;
      color: var(--primary-200, #177ba6);
      border: 1px solid var((--primary-200, #177ba6);
    }
  `}
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: fit-content;
  color: var(--neutral-200, #9ca3af);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019px;
`;
