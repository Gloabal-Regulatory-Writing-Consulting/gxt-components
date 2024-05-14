import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Tabs from "../Tabs";

describe("Tabs Component", () => {
  const tabs = [
    { title: "Tab 1", onClickHandler: vi.fn() },
    { title: "Tab 2", onClickHandler: vi.fn(), active: true },
    { title: "Tab 3", onClickHandler: vi.fn(), disabled: true },
  ];

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders multiple tabs", () => {
    render(<Tabs tabs={tabs} />);
    tabs.forEach((tab) => {
      expect(screen.getByText(tab.title)).toBeInTheDocument();
    });
  });

  it("renders tabs with custom className", () => {
    render(<Tabs tabs={tabs} className="custom-tabs" />);
    const container = screen.getByTestId("tabs-container");
    expect(container).toHaveClass("custom-tabs");
  });

  it("renders tabs with custom tabStyle", () => {
    render(<Tabs tabs={tabs} tabStyle="custom-tab" />);
    tabs.forEach((tab) => {
      const tabElement = screen.getByText(tab.title);
      expect(tabElement).toHaveClass("custom-tab");
    });
  });

  it("handles empty tabs array", () => {
    render(<Tabs tabs={[]} />);
    const container = screen.getByTestId("tabs-container");
    expect(container.childElementCount).toBe(0);
  });
});
