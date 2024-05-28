import React from "react";
import SvgIcon, { IconType } from "../svg/SvgIcon";
import {
  ArrowWrapper,
  HeaderContainer,
  HeaderTitle,
  SortContainer,
} from "./TableHeader.styles";

type ITableHeader = {
  ColumnName?: string;
  handleColumnSort: (order: string, column: string) => void;
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
  <HeaderContainer style={{ backgroundColor, height }}>
    <HeaderTitle>{Title}</HeaderTitle>
    <SortContainer isVisible={!!ColumnName} className={className}>
      <ArrowWrapper>
        <SvgIcon
          iconType={IconType.ARROW_UP}
          onClick={() => handleColumnSort("ASC", ColumnName)}
        />
      </ArrowWrapper>
      <SvgIcon
        iconType={IconType.ARROW_DOWN}
        onClick={() => handleColumnSort("DESC", ColumnName)}
      />
    </SortContainer>
  </HeaderContainer>
);

export default TableHeader;
