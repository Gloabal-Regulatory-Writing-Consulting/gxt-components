import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Tab from "../Tab";

describe("Tab Component", () => {
  const onClickHandler = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders with title", () => {
    render(<Tab title="Tab 1" onClickHandler={onClickHandler} />);
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
  });

  it("applies active styles when active is true", () => {
    render(<Tab title="Tab 1" active onClickHandler={onClickHandler} />);
    const tabElement = screen.getByText("Tab 1");

    expect(tabElement).toHaveClass("tab active-tab");
  });

  it("applies inactive styles when active is false", () => {
    render(
      <Tab title="Tab 1" active={false} onClickHandler={onClickHandler} />,
    );
    const tabElement = screen.getByText("Tab 1");
    expect(tabElement).toHaveClass("inactive-tab");
  });

  it("calls onClickHandler when clicked", () => {
    render(<Tab title="Tab 1" onClickHandler={onClickHandler} />);
    fireEvent.click(screen.getByText("Tab 1"));
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it("disables tab when disabled prop is true", () => {
    render(
      <Tab title="Tab 1" disabled={true} onClickHandler={onClickHandler} />,
    );
    const tabElement = screen.getByRole("button", { name: "Tab 1" });
    expect(tabElement).toBeDisabled();

    fireEvent.click(tabElement);
    expect(onClickHandler).not.toHaveBeenCalled();
  });

  it("applies custom class to tab", () => {
    render(
      <Tab
        title="Tab 1"
        onClickHandler={onClickHandler}
        className="custom-class"
      />,
    );
    const tabElement = screen.getByText("Tab 1");
    expect(tabElement).toHaveClass("custom-class");
  });
});
