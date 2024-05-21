import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CheckboxInput from "../CheckboxInput";

describe("CheckboxInput", () => {
  it("renders checkbox input", () => {
    render(<CheckboxInput onChange={() => {}} />);
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders indeterminate checkbox input", () => {
    render(<CheckboxInput onChange={() => {}} indeterminate />);
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toHaveProperty("indeterminate", true);
  });

  it("renders disabled checkbox input", () => {
    render(<CheckboxInput onChange={() => {}} disabled />);
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeDisabled();
  });

  it("renders checked checkbox input", () => {
    render(<CheckboxInput onChange={() => {}} checked />);
    const checkbox = screen.getByTestId("checkbox-input");
    expect(checkbox).toBeChecked();
  });

  it("calls onChange", () => {
    const onChange = vi.fn();
    render(<CheckboxInput onChange={onChange} />);
    const checkbox = screen.getByTestId("checkbox-input");
    checkbox.click();
    expect(onChange).toHaveBeenCalled();
  });
});
