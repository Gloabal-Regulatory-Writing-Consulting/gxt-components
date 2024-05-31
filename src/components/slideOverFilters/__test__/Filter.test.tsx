import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi, describe, it, beforeEach, expect } from "vitest";
import Filter from "../Filter";
import { FilterOptions } from "../SlideOverFilters";

describe("Filter component", () => {
  const checkboxOptions: FilterOptions["checkboxOptions"] = [
    {
      label: "Option 1",
      name: "test 1",
      value: "value 1",
      onChange: () => {},
    },
    {
      label: "Option 2",
      name: "test 2",
      value: "value 2",
      onChange: () => {},
    },
  ];

  const filters = {
    test1: ["value 1"],
    test2: [],
  };

  const handleCheckBoxChange = vi.fn();

  beforeEach(() => {
    render(
      <Filter
        header="Header"
        isSearchAble={false}
        isAccordionOpen={true}
        onChangeCallback={() => {}}
        checkboxOptions={checkboxOptions}
        handleCheckBoxChange={handleCheckBoxChange}
        filters={filters}
      />,
    );
  });

  it("renders checkboxes correctly", () => {
    const checkbox1 = screen.getByLabelText("Option 1");
    const checkbox2 = screen.getByLabelText("Option 2");
    expect(checkbox1).toBeInTheDocument();
    expect(checkbox2).toBeInTheDocument();
  });

  it("updates filters when checkbox changes", () => {
    const checkbox2 = screen.getAllByRole("checkbox");
    fireEvent.click(checkbox2[1]);
    expect(handleCheckBoxChange).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Function),
    );
  });
});
