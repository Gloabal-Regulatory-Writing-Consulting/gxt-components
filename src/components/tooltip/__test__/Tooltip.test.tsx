import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tooltip from "../Tooltip";

const tooltipText = "I am tooltip";

describe("Tooltip Component", () => {
  it("should render the tooltip on mouse hover", () => {
    const { getByText } = render(
      <Tooltip tooltipText={tooltipText}>
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText("Hover me");
    fireEvent.mouseEnter(button);
    expect(getByText(tooltipText)).toBeInTheDocument();
  });

  it("should hide the tooltip on mouse leave", () => {
    const { getByText, queryByText } = render(
      <Tooltip tooltipText={tooltipText}>
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = getByText("Hover me");
    fireEvent.mouseEnter(button);
    expect(getByText(tooltipText)).toBeInTheDocument();
    fireEvent.mouseLeave(button);
    expect(queryByText(tooltipText)).not.toBeInTheDocument();
  });
});
