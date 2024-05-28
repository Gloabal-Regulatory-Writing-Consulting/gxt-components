import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableHeader from "../TableHeader";
import { describe, expect, it } from "vitest";

describe("TableHeader Component", () => {
  const handleColumnSortMock = () => {
    console.log("handleColumnSort");
  };

  const defaultProps = {
    Title: "Example Header",
    handleColumnSort: handleColumnSortMock,
  };

  it("renders with default props", () => {
    render(<TableHeader {...defaultProps} />);
    const headerTitle = screen.getByText("Example Header");
    expect(headerTitle).toBeInTheDocument();
  });
});
