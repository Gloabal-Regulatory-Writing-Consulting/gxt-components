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
});
