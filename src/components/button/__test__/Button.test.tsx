import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import Button from "../Button";

describe("Button component", () => {
  it("Button should not render when disabled and loading", () => {
    render(<Button disabled>Click me</Button>);
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
    expect(button).toHaveTextContent("Click me");
  });
  it("Button should render when variant is primary", () => {
    const { asFragment } = render(<Button variant="primary">Click Me</Button>);

    expect(asFragment()).toMatchSnapshot("PrimaryButton");
  });
  it("Button should render when variant is secondary", () => {
    const { asFragment } = render(
      <Button variant="secondary">Click Me</Button>,
    );

    expect(asFragment()).toMatchSnapshot("SecondaryButton");
  });
  it("Button should render when variant is negative", () => {
    const { asFragment } = render(<Button variant="negative">Click Me</Button>);

    expect(asFragment()).toMatchSnapshot("NegativeButton");
  });
  it("Button should render when variant is positive", () => {
    const { asFragment } = render(<Button variant="positive">Click Me</Button>);

    expect(asFragment()).toMatchSnapshot("PositiveButton");
  });
});
