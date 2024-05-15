import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SvgIcon, { IconType } from "../SvgIcon";

describe("SVG Component", () => {
  Object.values(IconType).forEach((iconType) => {
    it(`should render correct SVG icon for ${iconType}`, () => {
      const { container } = render(<SvgIcon iconType={iconType} />);
      expect(container).toMatchSnapshot();
    });

    it(`should render with default size and no class - ${iconType}`, () => {
      const { container } = render(<SvgIcon iconType={IconType.SEARCH} />);
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("height", "24");
      expect(svgElement).toHaveAttribute("width", "24");
      expect(svgElement).not.toHaveClass();
    });

    it(`should render with custom size and class - ${iconType}`, () => {
      const { container } = render(
        <SvgIcon
          iconType={IconType.SEARCH}
          size={32}
          className="custom-icon"
        />,
      );
      const svgElement = container.querySelector("svg");
      expect(svgElement).toHaveAttribute("height", "32");
      expect(svgElement).toHaveAttribute("width", "32");
      expect(svgElement).toHaveClass("custom-icon");
    });
  });
});
