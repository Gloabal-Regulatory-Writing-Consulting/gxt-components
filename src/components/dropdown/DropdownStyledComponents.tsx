import styled from "styled-components";
import { DropdownPosition, Position } from "./Dropdown";

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

export const SelectItemsWrapper = styled.div<{
  position?: Position;
  $dropDownPosition?: DropdownPosition;
}>`
  position: absolute;
  ${({ position, $dropDownPosition }) => {
    switch (position) {
      case "top":
        return `
          bottom: 100%;
          margin-bottom: 0.25rem;
        `;
      case "bottom":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.25rem;
        `;
      case "left":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.25rem;
          right: 100%;
        `;
      case "right":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.25rem;
          left: 100%;
        `;
      case "center":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.25rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return `
          top: 100%;
          margin-top: 0.25rem;
        `;
    }
  }}
  border-radius: 0.375rem;
  border: 1px solid var(--neutral-200, #9ca3af);
  background: var(--system-50, #fff);
  max-height: 12.5rem;
  overflow-y: auto;
  z-index: 1;
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
    color: var(--primary-200, #177ba6);
  `}

  &:hover {
    color: var(--primary-200, #177ba6);
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
