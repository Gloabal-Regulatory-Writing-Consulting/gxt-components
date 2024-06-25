import { useState, useEffect, useRef, ReactNode, CSSProperties } from "react";
import {
  CustomSelectButton,
  DropdownContainer,
  IconWrapper,
  SelectHeaderItemWrapper,
  SelectItemsWrapper,
  SelectItemWrapper,
  SelectWrapper,
  StyledChevronDownIcon,
  StyledLabel,
} from "./DropdownStyledComponents";
import { Divider } from "../divider";

type DropdownType = "select" | "button";
type DropdownMenuType = "simple" | "divided";

export const Position = {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
  Center: "center",
} as const;

export type PositionType = (typeof Position)[keyof typeof Position];

export const DropdownPosition = {
  Up: "up",
  Down: "down",
} as const;

export type DropdownPositionType =
  (typeof DropdownPosition)[keyof typeof DropdownPosition];

type GroupedOption<T> = { header: string; options: T[] };

export type CustomStylesType = {
  container?: CSSProperties;
  button?: CSSProperties;
  label?: CSSProperties;
  icon?: CSSProperties;
  itemsWrapper?: CSSProperties;
  header?: CSSProperties;
  item?: CSSProperties;
  placeholder?: CSSProperties;
};

export interface DropdownProps<T> {
  disabled?: boolean;
  type: DropdownType;
  menuType?: DropdownMenuType;
  options?: T[];
  groupedOptions?: GroupedOption<T>[];
  renderOption?: (option: T | null) => ReactNode;
  onSelect?: (option: T) => void;
  label?: string;
  placeholder?: string | ReactNode;
  initialValue?: T | null;
  dropdownIcon?: boolean;
  position: PositionType;
  customStyles?: CustomStylesType;
  equalityFn?: (optionA: T | null, optionB: T | null) => boolean;
}

const Dropdown = <T,>({
  disabled = false,
  type,
  menuType = "simple",
  options = [],
  groupedOptions = [],
  onSelect,
  renderOption = (option: T | null) => option?.toString(),
  label,
  placeholder,
  initialValue = null,
  dropdownIcon = false,
  position = Position.Bottom,
  customStyles = {},
  equalityFn = (optionA: T | null, optionB: T | null) => optionA === optionB,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(
    initialValue || options?.at(0) || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] =
    useState<DropdownPositionType>(DropdownPosition.Down);

  useEffect(() => {
    if (dropdownRef.current && isOpen) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const bottomSpace = window.innerHeight - buttonRect.bottom;
      setDropdownPosition(
        bottomSpace < 200 ? DropdownPosition.Up : DropdownPosition.Down,
      );
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedOption(initialValue || options?.at(0) || null);
  }, [initialValue, options]);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleItemClick = (item: T) => {
    onSelect && onSelect(item);
    if (type === "select") {
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
    select: selectedOption ? renderOption(selectedOption) : placeholder,
    button: placeholder,
  };

  const getDropdownOptions = (options: T[]) => {
    return options.map((option, index) => (
      <SelectItemWrapper
        key={index}
        $isActive={type === "select" && equalityFn(option, selectedOption)}
        onClick={() => handleItemClick(option)}
        style={customStyles.item}
      >
        {renderOption(option)}
      </SelectItemWrapper>
    ));
  };

  const getGroupedDropdownOptions = (groupedOptions: GroupedOption<T>[]) => {
    return groupedOptions.map((group, index) => (
      <div key={index}>
        {group.header && (
          <SelectHeaderItemWrapper key={index} style={customStyles.header}>
            {group.header}
          </SelectHeaderItemWrapper>
        )}
        {getDropdownOptions(group.options)}
        {index < groupedOptions.length - 1 && <Divider />}
      </div>
    ));
  };

  const DropdownOptions =
    menuType === "simple"
      ? getDropdownOptions(options)
      : getGroupedDropdownOptions(groupedOptions);

  return (
    <DropdownContainer ref={dropdownRef} style={customStyles.container}>
      {label && (
        <StyledLabel
          data-testid="label"
          aria-label={label}
          style={customStyles.label}
        >
          {label}
        </StyledLabel>
      )}
      <CustomSelectButton
        onClick={toggleDropdown}
        disabled={disabled}
        style={customStyles.button}
      >
        <SelectWrapper style={customStyles.placeholder}>
          {currentOption[type]}
        </SelectWrapper>
        {dropdownIcon && (
          <IconWrapper disabled={disabled} style={customStyles.icon}>
            <StyledChevronDownIcon disabled={disabled} />
          </IconWrapper>
        )}
      </CustomSelectButton>
      {isOpen && (
        <SelectItemsWrapper
          position={position}
          $dropDownPosition={dropdownPosition}
          style={customStyles.itemsWrapper}
        >
          {DropdownOptions}
        </SelectItemsWrapper>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
