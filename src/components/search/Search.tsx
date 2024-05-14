import React, { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import SvgIcon, { IconType } from "../svg/SvgIcon";

export interface SearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  onChangeCallback: (searchTerm: string) => void;
  className?: string;
  placeholder?: string;
  debounceTime?: number;
  width?: string;
}

const SearchContainer = styled.div<{ width: string }>`
  position: relative;
  display: inline-block;
  width: ${(props) => props.width || "100%"};
`;

const SearchInput = styled.input`
  outline: none;
  padding-left: 30px;
  width: 100%;
  border-radius: 6px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-right: 8px;
  border: 1px solid var(--neutral-200, #9ca3af);
  background: var(--system-50, #fff);
  color: var(--neutral-200, #9ca3af);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  &:focus {
    border: 1px solid var(--primary-100, #1c99ce);
    outline: 1px solid var(--primary-100, #1c99ce);
  }

  &:hover {
    border: 1px solid var(--primary-100, #1c99ce);
  }
`;

const StyledIcon = styled(SvgIcon)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--neutral-200, #9ca3af);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 1rem;
`;

const Search: React.FC<SearchProps> = ({
  id,
  name,
  placeholder,
  className = "",
  onChangeCallback,
  debounceTime = 500,
  width = "20rem",
  ...rest
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onChangeCallback(searchTerm);
    }, debounceTime);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, debounceTime]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <SearchContainer width={width}>
      <StyledIcon iconType={IconType.SEARCH} />
      <SearchInput
        {...rest}
        type="text"
        id={id || "search"}
        name={name || "search"}
        onChange={handleInputChange}
        placeholder={placeholder || "Search"}
        value={searchTerm}
        autoComplete="off"
        data-testid="search"
        className={className}
      />
    </SearchContainer>
  );
};

export default Search;
