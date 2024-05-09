import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button component", () => {
  it("Button should render correctly", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("Button should render text", () => {
    render(<Button text="Click me" />);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });
  it("Button should be disabled", () => {
    render(<Button disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
