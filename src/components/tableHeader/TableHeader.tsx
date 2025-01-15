import React, { useMemo } from "react";
import {
  ArrowWrapper,
  HeaderContainer,
  HeaderTitle,
  SortContainer,
} from "./TableHeader.styles";
import ArrowUp from "../../assets/icons/arrowup-icon.svg";
import ArrowDown from "../../assets/icons/arrowdown-icon.svg";
import ArrowUpFilled from "../../assets/icons/arrow-up-filled.svg";
import ArrowDownFilled from "../../assets/icons/arrow-down-filled.svg";

type ITableHeader = {
  ColumnName?: string;
  handleColumnSort: (order: "ASC" | "DESC", column: string) => void;
  Title: string;
  className?: string;
  height?: string;
  backgroundColor?: string;
  activeColumn?: {
    column: string;
    order: "ASC" | "DESC";
  };
};

const TableHeader: React.FC<ITableHeader> = ({
  ColumnName = "",
  handleColumnSort,
  Title,
  className = "",
  height = "",
  backgroundColor = "",
  activeColumn = { order: "ASC", column: "" },
}) => {
  const { column, order } = activeColumn;

  const ArrowUpIcon = useMemo(() => {
    if (column === ColumnName && order === "ASC") {
      return ArrowUpFilled;
    }
    return ArrowUp;
  }, [column, order, ColumnName]);

  const ArrowDownIcon = useMemo(() => {
    if (column === ColumnName && order === "DESC") {
      return ArrowDownFilled;
    }
    return ArrowDown;
  }, [column, order, ColumnName]);

  return (
    <HeaderContainer backgroundColor={backgroundColor} height={height}>
      <HeaderTitle>{Title}</HeaderTitle>
      <SortContainer
        data-testid="sort-container"
        isVisible={!!ColumnName}
        className={className}
      >
        <ArrowWrapper>
          <ArrowUpIcon
            onClick={() => handleColumnSort("ASC", ColumnName)}
            data-testid="arrow-up-icon"
            fill="var(--system-50, #fff)"
          />
        </ArrowWrapper>
        <ArrowWrapper>
          <ArrowDownIcon
            onClick={() => handleColumnSort("DESC", ColumnName)}
            data-testid="arrow-down-icon"
            fill="var(--system-50, #fff)"
          />
        </ArrowWrapper>
      </SortContainer>
    </HeaderContainer>
  );
};

export default TableHeader;
