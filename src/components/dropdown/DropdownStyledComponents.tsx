import styled from "styled-components";
import { DropdownPositionType, PositionType } from "./Dropdown";
import ChevronDownIcon from "../../assets/icons/chevrondown.svg";

export const SelectWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 0.25rem 0 0 0.25rem;
  border: none;
  background: var(--system-50, #fff);
  color: var(--neutral-200, #9ca3af);
  font-weight: 700;
  transition: color 0.3s;
`;

export const IconWrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-left: 1px solid var(--neutral-200, #9ca3af);
  border-radius: 0 0.25rem 0.25rem 0;
  background: var(--system-50, #fff);
  transition:
    border-color 0.3s,
    color 0.3s;

  ${({ disabled }) =>
    !disabled &&
    `
      &:hover {
        border-color: var(--primary-200, #177ba6);
      }
  `}
`;

export const StyledChevronDownIcon = styled(ChevronDownIcon)<{
  disabled: boolean;
}>`
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ disabled }) =>
    disabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-50, #2aace2)"};
`;

export const SelectItemsWrapper = styled.div<{
  position?: PositionType;
  $dropDownPosition?: DropdownPositionType;
}>`
  position: absolute;
  ${({ position, $dropDownPosition }) => {
    switch (position) {
      case "top":
        return `
          bottom: 100%;
          margin-bottom: 0.5rem;
        `;
      case "bottom":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.5rem;
        `;
      case "left":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.5rem;
          right: 100%;
        `;
      case "right":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.5rem;
          left: 100%;
        `;
      case "center":
        return `
          ${$dropDownPosition === "down" ? "top" : "bottom"}: 100%;
          ${$dropDownPosition === "down" ? "margin-top" : "margin-bottom"}: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
        `;
      default:
        return `
          top: 100%;
          margin-top: 0.5rem;
        `;
    }
  }}
  border-radius: 0.25rem;
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
  padding: 0.5rem 1rem;

  &:first-child {
    border-radius: 0.25rem 0.25rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 0.25rem 0.25rem;
    border-bottom: none;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    color: var(--neutral-400, #414141);
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
  border-radius: 0.25rem;
  padding: 0;
  background: var(--system-50, #fff);
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  overflow: hidden;

  &:not(:disabled):hover {
    transition:
      border-color 0.3s,
      color 0.3s;
    color: var(--primary-200, #177ba6);
    border: 1px solid var(--primary-200, #177ba6);
  }

  &:not(:disabled):hover
    ${SelectWrapper},
    &:not(:disabled):hover
    ${IconWrapper} {
    color: var(--primary-200, #177ba6);
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
  letter-spacing: 0.00119rem;
`;

export const StyledLabel = styled.label`
  font-size: 0.9375rem;
  display: block;
  margin-bottom: 0.3125rem;
  font-weight: 700;
`;
