import React from "react";
import {
  ArrowWrapper,
  HeaderContainer,
  HeaderTitle,
  SortContainer,
} from "./TableHeader.styles";
import ArrowUp from "../../assets/icons/arrowup-icon.svg";
import ArrowDown from "../../assets/icons/arrowdown-icon.svg";

type ITableHeader = {
  ColumnName?: string;
  handleColumnSort: (order: "ASC" | "DESC", column: string) => void;
  Title: string;
  className?: string;
  height?: string;
  backgroundColor?: string;
};

const TableHeader: React.FC<ITableHeader> = ({
  ColumnName = "",
  handleColumnSort,
  Title,
  className = "",
  height = "",
  backgroundColor = "",
}) => (
  <HeaderContainer backgroundColor={backgroundColor} height={height}>
    <HeaderTitle>{Title}</HeaderTitle>
    <SortContainer
      data-testid="sort-container"
      isVisible={!!ColumnName}
      className={className}
    >
      <ArrowWrapper>
        <ArrowUp
          onClick={() => handleColumnSort("ASC", ColumnName)}
          data-testid="arrow-up-icon"
        />
      </ArrowWrapper>
      <ArrowDown
        onClick={() => handleColumnSort("DESC", ColumnName)}
        data-testid="arrow-down-icon"
      />
    </SortContainer>
  </HeaderContainer>
);

export default TableHeader;
