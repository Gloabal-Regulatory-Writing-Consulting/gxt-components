import React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge, { BadgeProps } from "../Badge";

const renderBadge = (props: BadgeProps) => {
  return render(<Badge {...props} />);
};

describe("Badge component", () => {
  it("renders with label and type 'basic'", () => {
    const { getByText, queryByTestId } = renderBadge({
      label: "Badge",
      type: "basic",
    });
    const badgeElement = getByText("Badge");
    const crossIcon = queryByTestId("cross-icon");
    expect(crossIcon).toBeInTheDocument();
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.tagName).toBe("DIV");
  });

  it("renders with label and type 'autosave'", () => {
    const { getByText, queryByTestId } = renderBadge({
      label: "Autosave",
      type: "autosave",
    });
    const checkMarkIcon = queryByTestId("checkmark-icon");
    expect(checkMarkIcon).toBeInTheDocument();
    const badgeElement = getByText("Autosave");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.tagName).toBe("DIV");
  });

  it("renders with label and type 'nosave'", () => {
    const { getByText } = renderBadge({ label: "No Save", type: "nosave" });
    const badgeElement = getByText("No Save");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.tagName).toBe("DIV");
  });

  it("renders with label and type 'disabled'", () => {
    const { getByText } = renderBadge({ label: "Disabled", type: "disabled" });
    const badgeElement = getByText("Disabled");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.tagName).toBe("DIV");
  });

  it("renders with className", () => {
    const { getByText } = renderBadge({
      label: "Custom Class",
      type: "basic",
      className: "custom-class",
    });
    const badgeElement = getByText("Custom Class");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.tagName).toBe("DIV");
    expect(badgeElement).toHaveClass("custom-class");
  });

  it("does not render icon when showIcon is false", () => {
    const { queryByTestId } = renderBadge({
      label: "No Icon",
      type: "basic",
      showIcon: false,
    });
    expect(queryByTestId("cross-icon")).toBeNull();
    expect(queryByTestId("checkmark-icon")).toBeNull();
  });
});
