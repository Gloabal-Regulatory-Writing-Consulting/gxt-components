import { useState, useEffect, useRef, ReactNode } from "react";
import SvgIcon, { IconType } from "../svg/SvgIcon";
import {
  CustomSelectButton,
  DropdownContainer,
  IconWrapper,
  SelectItemsWrapper,
  SelectItemWrapper,
  SelectWrapper,
} from "./DropdownStyledComponents";

type DropdownType = "select" | "button";
export type DropdownPosition = "top" | "bottom";

export interface DropdownProps<T> {
  disabled?: boolean;
  type: DropdownType;
  options: T[];
  renderOption: (option: T | null) => ReactNode;
  onSelect?: (option: T) => void;
  label?: string;
}

const Dropdown = <T,>({
  disabled = false,
  type,
  options,
  onSelect,
  renderOption = (option: T | null) => option?.toString(),
  label,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(
    options.at(0) || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<DropdownPosition>("bottom");

  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const bottomSpace = window.innerHeight - buttonRect.bottom;
      setPosition(bottomSpace < 200 ? "bottom" : "top");
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleItemClick = (item: T) => {
    if (type === "select" && onSelect) {
      onSelect(item);
      setSelectedOption(item);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const currentOption = {
    select: renderOption(selectedOption),
    button: label,
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <CustomSelectButton onClick={toggleDropdown} disabled={disabled}>
        <SelectWrapper>{currentOption[type]}</SelectWrapper>
        <IconWrapper disabled={disabled}>
          <SvgIcon
            iconType={IconType.ChevronDown}
            fill={
              disabled
                ? "var(--neutral-200, #9CA3AF)"
                : "var(--primary-50, #2AACE2)"
            }
          />
        </IconWrapper>
      </CustomSelectButton>
      {isOpen && (
        <SelectItemsWrapper position={position}>
          {options.map((option, index) => (
            <SelectItemWrapper
              key={index}
              onClick={() => handleItemClick(option)}
            >
              {renderOption(option)}
            </SelectItemWrapper>
          ))}
        </SelectItemsWrapper>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
