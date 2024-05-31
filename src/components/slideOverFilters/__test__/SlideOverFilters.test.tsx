import React from "react";
import { it, expect, vi, describe } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SlideOverFilters from "../SlideOverFilters";

describe("SlideOverFilters", () => {
  const defaultProps = {
    isOpen: true,
    title: "Filters Templates",
    resetButtonLabel: "Clear Selection",
    applyButtonLabel: "Filter",
    closeButtonLabel: "Close",
    onCloseHandler: vi.fn(),
    onApplyHandler: vi.fn(),
    onResetHandler: vi.fn(),
    filtersOptions: [
      {
        header: "Header 1",
        isSearchAble: true,
        isAccordionOpen: true,
        onChangeCallback: vi.fn(),
        checkboxOptions: [
          {
            label: "Option 1",
            name: "test 1",
            value: "value 1",
            onChange: vi.fn(),
          },
        ],
      },
    ],
  };

  it("renders with title", () => {
    render(<SlideOverFilters {...defaultProps} />);

    const titleElement = screen.getByText("Filters Templates");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders with checkboxes", () => {
    render(<SlideOverFilters {...defaultProps} />);

    const checkboxElement = screen.getByLabelText("Option 1");
    expect(checkboxElement).toBeInTheDocument();
  });

  it("calls onChange callback when text in search is changed", async () => {
    render(<SlideOverFilters {...defaultProps} />);

    const searchElement = screen.getByTestId("search");
    fireEvent.change(searchElement, { target: { value: "test" } });

    await waitFor(
      () => {
        expect(
          defaultProps.filtersOptions[0].onChangeCallback,
        ).toHaveBeenCalled();
      },
      { timeout: 1000 },
    );
  });

  it("calls onApply handler when apply button is clicked", () => {
    render(<SlideOverFilters {...defaultProps} />);

    const applyButtonElement = screen.getByText("Filter");
    applyButtonElement.click();

    expect(defaultProps.onApplyHandler).toHaveBeenCalled();
  });

  it("calls onReset handler when reset button is clicked", () => {
    render(<SlideOverFilters {...defaultProps} />);

    const resetButtonElement = screen.getByText("Clear Selection");
    resetButtonElement.click();

    expect(defaultProps.onResetHandler).toHaveBeenCalled();
  });

  it("calls onClose handler when close button is clicked", () => {
    render(<SlideOverFilters {...defaultProps} />);

    const closeButtonElement = screen.getByText("Close");
    closeButtonElement.click();

    expect(defaultProps.onCloseHandler).toHaveBeenCalled();
  });
});
