import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TableHeader from "../TableHeader";
import { describe, expect, it, vi } from "vitest";
import { IconType } from "../../svg/SvgIcon";

describe("TableHeader Component", () => {
  const handleColumnSortMock = vi.fn();

  const defaultProps = {
    Title: "Example Header",
    handleColumnSort: handleColumnSortMock,
  };

  it("renders with default props", () => {
    render(<TableHeader {...defaultProps} />);
    const headerTitle = screen.getByText("Example Header");
    expect(headerTitle).toBeInTheDocument();
  });
  it("renders sort icons when ColumnName is provided", () => {
    render(<TableHeader {...defaultProps} ColumnName="exampleColumn" />);
    const upArrow = screen.queryByTestId(IconType.ARROW_UP);
    const downArrow = screen.queryByTestId(IconType.ARROW_DOWN);
    expect(upArrow).toBeDefined();
    expect(downArrow).toBeDefined();
  });
  it("does not render sort icons when ColumnName is not provided", () => {
    render(<TableHeader {...defaultProps} />);
    expect(screen.queryByTestId(IconType.ARROW_UP)).not.toBeInTheDocument();
    expect(screen.queryByTestId(IconType.ARROW_DOWN)).not.toBeInTheDocument();
  });
  it("calls handleColumnSort with ASC order when the up arrow icon is clicked", () => {
    render(
      <TableHeader
        Title="Name"
        handleColumnSort={handleColumnSortMock}
        ColumnName="name"
      />,
    );

    fireEvent.click(screen.getByTestId("arrow-up-icon"));

    expect(handleColumnSortMock).toHaveBeenCalledWith("ASC", "name");
  });

  it("calls handleColumnSort with DESC order when the down arrow icon is clicked", () => {
    render(
      <TableHeader
        Title="Name"
        handleColumnSort={handleColumnSortMock}
        ColumnName="name"
      />,
    );

    fireEvent.click(screen.getByTestId("arrow-down-icon"));

    expect(handleColumnSortMock).toHaveBeenCalledWith("DESC", "name");
  });
});
