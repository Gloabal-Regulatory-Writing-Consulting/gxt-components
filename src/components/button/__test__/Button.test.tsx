import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import Button from "../Button";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  title: string | ReactNode;
  loading?: boolean;
  disabled?: boolean;
  classNames?: string;
  variant?: "primary" | "secondary" | "negative" | "positive";
}

describe("Button component", () => {
  it("Button should not render when disabled and loading", () => {
    render(
      <Button disabled loading>
        Click me
      </Button>,
    );
    const button = screen.queryByRole("button");
    expect(button).toBeDisabled();
  });
  it("Button should not render when loading", () => {
    render(<Button loading>Click me</Button>);
    const button = screen.queryByRole("button");
    expect(button).toBeDisabled();
  });
  it("Button should not have type submit if onClick is not defined", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).not.toHaveAttribute("type", "submit");
  });
  it("Button should render title as a child", () => {
    const title = "Click me";
    render(<Button>{title}</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(title);
  });
  it("Button should render title as a node", () => {
    const title = <span>Click me</span>;
    render(<Button>{title}</Button>);
    const button = screen.getByRole("button");
    expect(button.children[0]).toHaveTextContent("Click me");
  });
  it("Button should add primary-button class", () => {
    render(<Button variant="primary">Click me</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(/_button/);
    expect(button).toHaveClass(/_primary-button/);
  });
  it("Button should add secondary-button class", () => {
    render(<Button variant="secondary">Click me</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(/_button/);
    expect(button).toHaveClass(/_secondary-button/);
  });
  it("Button should add negative-button class", () => {
    render(<Button variant="negative">Click me</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(/_button/);
    expect(button).toHaveClass(/_negative-button/);
  });
  it("Button should add positive-button class", () => {
    render(<Button variant="positive">Click me</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass(/_button/);
    expect(button).toHaveClass(/_positive-button/);
  });

  it("Button should add passed className", () => {
    render(
      <Button variant="positive" classNames="test-className">
        Click me
      </Button>,
    );

    const button = screen.getByRole("button");

    expect(button).toHaveClass(/_button/);
    expect(button).toHaveClass(/_positive-button/);
    expect(button).toHaveClass("test-className");
  });
});
