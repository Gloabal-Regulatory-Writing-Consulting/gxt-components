import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("Input component", () => {
  it("Input should render correctly", () => {
    render(<Input />);
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });
  it("Input should render text", () => {
    render(<Input label="Click me" />);
    const label = screen.getByTestId("label");
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
  it("Input should be disabled", () => {
    render(<Input disabled />);
    const input = screen.getByTestId("input");
    expect(input).toBeDisabled();
  });
  it("Input should render password", () => {
    render(<Input inputType="password" />);
    const input = screen.getByTestId("input");
    expect(input).toHaveAttribute("type", "password");
  });
});
