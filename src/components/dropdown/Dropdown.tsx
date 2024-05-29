import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";
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
export enum Position {
  Top = "top",
  Bottom = "bottom",
  Left = "left",
  Right = "right",
  Center = "center",
}

export enum DropdownPosition {
  Up = "up",
  Down = "down",
}

export type CustomStylesType = {
  container?: CSSProperties;
  button?: CSSProperties;
  icon?: CSSProperties;
  itemsWrapper?: CSSProperties;
  item?: CSSProperties;
};

export interface DropdownProps<T> {
  disabled?: boolean;
  type: DropdownType;
  options: T[];
  renderOption?: (option: T | null) => ReactNode;
  onSelect?: (option: T) => void;
  label?: string | ReactNode;
  initialValue?: T | null;
  dropdownIcon?: boolean;
  position: Position;
  customStyles?: CustomStylesType;
}

const Dropdown = <T,>({
  disabled = false,
  type,
  options,
  onSelect,
  renderOption = (option: T | null) => option?.toString(),
  label,
  initialValue = null,
  dropdownIcon = false,
  position = Position.Bottom,
  customStyles = {},
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(
    initialValue || options?.at(0) || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<DropdownPosition>(
    DropdownPosition.Down,
  );

  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const bottomSpace = window.innerHeight - buttonRect.bottom;
      setDropdownPosition(
        bottomSpace < 200 ? DropdownPosition.Up : DropdownPosition.Down,
      );
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
    <DropdownContainer ref={dropdownRef} style={customStyles.container}>
      <CustomSelectButton
        onClick={toggleDropdown}
        disabled={disabled}
        style={customStyles.button}
      >
        <SelectWrapper>{currentOption[type]}</SelectWrapper>
        {dropdownIcon && (
          <IconWrapper disabled={disabled} style={customStyles.icon}>
            <SvgIcon
              iconType={IconType.ChevronDown}
              fill={
                disabled
                  ? "var(--neutral-200, #9CA3AF)"
                  : "var(--primary-50, #2AACE2)"
              }
            />
          </IconWrapper>
        )}
      </CustomSelectButton>
      {isOpen && (
        <SelectItemsWrapper
          position={position}
          $dropDownPosition={dropdownPosition}
          style={customStyles.itemsWrapper}
        >
          {options.map((option, index) => (
            <SelectItemWrapper
              key={index}
              $isActive={type === "select" && option === selectedOption}
              onClick={() => handleItemClick(option)}
              style={customStyles.item}
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
