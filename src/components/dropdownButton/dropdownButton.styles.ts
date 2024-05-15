import styled from "styled-components";
import SvgIcon from "../svg/SvgIcon";

interface IsOpenProps {
  isOpen: boolean;
  isSelected?: boolean;
}

export const SelectSelected = styled.div<IsOpenProps>`
  opacity: 0px;
  color: ${({ isSelected }) =>
    isSelected ? "#414141" : "var(--neutral-200, #9ca3af)"};
  padding: 8px 16px;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ isOpen }) => (isOpen ? 400 : 400)};
  line-height: 150%;
  letter-spacing: 0.019px;
  flex-grow: 1;

  ${({ isOpen }) =>
    isOpen &&
    `
    color: var(--primary-200, #177ba6);
  `}
`;

export const SearchIconWrapper = styled.span<IsOpenProps>`
  display: flex;
  align-items: center;
  border-left: 1px solid var(--neutral-200, #9ca3af);
  padding-top: 8px;

  ${({ isOpen }) =>
    isOpen &&
    `
    border-color: var(--primary-200, #177ba6);
  `}

  &.disabled {
    fill: var(--neutral-200, #9ca3af);
  }
`;

export const SelectItems = styled.div`
  top: 100%;
  left: 0;
  right: 0;
  z-index: -100;
  width: 100%;
  min-height: 100px;
  margin-top: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SelectItem = styled.div`
  &:hover,
  &.same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ChevronDownIcon = styled(SvgIcon)`
  padding: 8px;
  width: 10px;
  height: 13px;

  &.disabled {
    fill: var(--neutral-200, #9ca3af);
  }
`;

export const CustomSelect = styled.button<{
  disabled: boolean;
  isOpen: boolean;
}>`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 151px; /* Define a minimum width */
  width: auto; /* Allow the width to adjust based on content */
  height: 40px;
  gap: 0px;
  border-radius: 4px;
  border: 1px solid var(--neutral_200, #9ca3af);
  opacity: 0px;
  padding: 0px;
  background-color: #f9fafb;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    border-color: ${({ disabled }) =>
      disabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-200, #177ba6)"};
  }

  &:hover ${SearchIconWrapper} {
    border-color: ${({ disabled }) =>
      disabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-200, #177ba6)"};
  }

  &:hover ${SelectSelected} {
    color: ${({ disabled }) =>
      disabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-200, #177ba6)"};
    font-weight: ${({ disabled }) => (disabled ? "400" : "700")};
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    border-color: var(--primary-200, #177ba6);
  `}
`;
