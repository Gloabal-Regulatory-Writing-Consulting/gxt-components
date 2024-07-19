import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { TagsField } from "../";

describe("TagsField Component", () => {
  it("renders TagsField component with provided values", () => {
    const testValue = [
      { label: "Tag1", value: "value1" },
      { label: "Tag2", value: "value2" },
    ];
    render(<TagsField value={testValue} disabled={false} onClick={() => {}} />);

    // Assert that the rendered tags match the test value
    testValue.forEach((tag) => {
      expect(screen.getByText(tag.label)).toBeInTheDocument();
    });
  });

  it("handles onClick event correctly", () => {
    const onClickMock = vi.fn();
    render(<TagsField value={[]} disabled={false} onClick={onClickMock} />);

    // Simulate a user click
    fireEvent.click(screen.getByRole("input"));

    // Expect the onClick function to have been called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders disabled TagsField component", () => {
    const onClickMock = vi.fn();
    render(<TagsField value={[]} disabled={true} onClick={onClickMock} />);

    // Simulate a user click
    fireEvent.click(screen.getByRole("input"));

    // Expect the onClick function to have been called
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it("renders label and helpText correctly", () => {
    const testValue = [
      { label: "Tag1", value: "value1" },
      { label: "Tag2", value: "value2" },
    ];
    render(
      <TagsField
        value={testValue}
        disabled={false}
        onClick={() => {}}
        label="Test Label"
        helpText="Test Help Text"
      />,
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Help Text")).toBeInTheDocument();
  });
});
