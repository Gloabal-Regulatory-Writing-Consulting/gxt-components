import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import DropdownButton from "../DropdownButton";

describe("DropdownButton component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const renderOption = vi.fn((option) => <div>{option}</div>);
  const onSelect = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with select type", () => {
    render(
      <DropdownButton
        type="select"
        options={options}
        renderOption={renderOption}
        onSelect={onSelect}
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));

    options.forEach((option) => {
      expect(screen.getAllByText(option)[0]).toBeInTheDocument();
    });
  });

  it("renders correctly with button type", () => {
    render(
      <DropdownButton
        type="button"
        options={options}
        renderOption={renderOption}
        label="Select an option"
      />,
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("calls onSelect when an option is selected", () => {
    render(
      <DropdownButton
        type="select"
        options={options}
        renderOption={renderOption}
        onSelect={onSelect}
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));
    fireEvent.click(screen.getByText("Option 2"));

    expect(onSelect).toHaveBeenCalledWith("Option 2");
  });

  it("disables button when disabled prop is true", () => {
    render(
      <DropdownButton
        type="button"
        options={options}
        renderOption={renderOption}
        label="Select an option"
        disabled={true}
      />,
    );

    expect(screen.getByText("Select an option").parentElement).toBeInstanceOf(
      HTMLButtonElement,
    );
    expect(screen.getByText("Select an option").parentElement).toBeDisabled();
  });
});
