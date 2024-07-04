import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TextArea from "../TextArea";

describe("TextArea Component", () => {
  const handleChange = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render without crashing", () => {
    render(<TextArea onChange={handleChange} />);
  });

  it("should render with custom props", () => {
    render(
      <TextArea
        id="customTextarea"
        name="customTextarea"
        heading="Custom Heading"
        caption="Custom Caption"
        placeholder="Custom Placeholder"
        className="custom-textarea"
        onChange={handleChange}
      />,
    );
    expect(
      screen.getByPlaceholderText("Custom Placeholder"),
    ).toBeInTheDocument();
    expect(screen.getByText("Custom Heading")).toBeInTheDocument();
    expect(screen.getByText("Custom Caption")).toBeInTheDocument();
  });

  it("should handle text input correctly", async () => {
    render(<TextArea onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test input" },
    });
    await waitFor(() => {
      expect(screen.getByRole("textbox")).toHaveValue("test input");
    });
  });

  it("should render as disabled when the disabled prop is true", () => {
    render(<TextArea onChange={handleChange} disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  it("should render the heading with disabled styling when disabled", () => {
    render(
      <TextArea
        heading="Disabled Heading"
        caption="Disabled Caption"
        onChange={handleChange}
        disabled
      />,
    );
    const heading = screen.getByText("Disabled Heading");
    expect(heading).toHaveStyle("color: var(--neutral-200, #9ca3af)");
  });
});
