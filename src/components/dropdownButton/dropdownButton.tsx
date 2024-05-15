import { useState, useEffect, useRef, FC, ReactNode } from "react";
import { IconType } from "../svg/SvgIcon";
import {
  ChevronDownIcon,
  CustomSelect,
  SearchIconWrapper,
  SelectItem,
  SelectItems,
  SelectSelected,
} from "./dropdownButton.styles";

interface DropdownButtonProps {
  disabled: boolean;
  selectItems: Array<string | { label: string; element: ReactNode }>;
}

const DropdownButton: FC<DropdownButtonProps> = ({ disabled, selectItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleItemClick = (
    item: string | { label: string; element: ReactNode },
  ) => {
    if (typeof item === "string") {
      setSelected(item);
    } else {
      setSelected(item.label);
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

  return (
    <div ref={dropdownRef}>
      <CustomSelect
        onClick={toggleDropdown}
        disabled={disabled}
        isOpen={isOpen}
      >
        <SelectSelected isOpen={isOpen} isSelected={!!selected}>
          {selected || "Button text"}
        </SelectSelected>
        <SearchIconWrapper
          className={disabled ? "disabled" : ""}
          isOpen={isOpen}
        >
          <ChevronDownIcon
            iconType={IconType.ChevronDown}
            className={disabled ? "disabled" : ""}
          />
        </SearchIconWrapper>
      </CustomSelect>
      {isOpen && (
        <SelectItems>
          {selectItems.map((item, index) => (
            <SelectItem
              key={index}
              onClick={() => handleItemClick(item)}
              className={
                typeof item === "string"
                  ? item === selected
                    ? "same-as-selected"
                    : ""
                  : item.label === selected
                    ? "same-as-selected"
                    : ""
              }
            >
              {typeof item === "string" ? item : item.element}
            </SelectItem>
          ))}
        </SelectItems>
      )}
    </div>
  );
};

export default DropdownButton;
