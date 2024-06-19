import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Switch from "../Switch";

const handleToggle = vi.fn();

const renderSwitch = (checked: boolean, isDisabled = false) => {
  return render(
    <Switch
      checked={checked}
      onChange={handleToggle}
      isDisabled={isDisabled}
    />,
  );
};

describe("Switch component", () => {
  it("Switch component should be checked when checked is true", () => {
    renderSwitch(true);
    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).toBeChecked();
  });

  it("Switch component should be unchecked when checked is false", () => {
    renderSwitch(false);

    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).not.toBeChecked();
  });

  it("Switch component should call handleToggle when clicked", () => {
    renderSwitch(false);

    const switchElement = screen.getByRole("checkbox");
    fireEvent.click(switchElement);

    expect(handleToggle).toHaveBeenCalledTimes(1);
  });

  it("Switch component should be disabled when disabled is true", () => {
    renderSwitch(false, true);

    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).toBeDisabled();
  });
});
