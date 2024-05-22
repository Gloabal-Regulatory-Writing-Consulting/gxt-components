import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Navitem from "../Navitem";
import { NavItemProps } from "../Navitem";
import { describe, expect, it } from "vitest";

const MockIcon = (props: any) => <svg {...props} data-testid="mock-icon" />;

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>,
  );
};

const defaultProps: NavItemProps = {
  permission: "/home",
  text: "Home",
  Icon: MockIcon,
  className: "",
  isExpanded: true,
};

describe("Navitem component", () => {
  it("renders without crashing", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />);
    expect(screen.getByTestId("Home")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with correct text", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders icon when provided", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not render icon when not provided", () => {
    const { asFragment } = renderWithRouter(
      <Navitem {...defaultProps} Icon={undefined} />,
    );
    expect(screen.queryByTestId("mock-icon")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders expanded text when isExpanded is true", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not render expanded text when isExpanded is false", async () => {
    const { asFragment } = renderWithRouter(
      <Navitem {...defaultProps} isExpanded={false} />,
    );

    const navText = screen.getByText("Home");
    expect(navText).toHaveStyle("visibility: hidden");
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies active styles when link is active", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />, {
      route: "/home",
    });
    const navItemContainer = screen.getByTestId("Home").firstChild;
    expect(navItemContainer).toHaveStyle("border-left: solid");
    expect(navItemContainer).toHaveStyle(
      "border-left-color: var(--primary-200, #177BA6)",
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("does not apply active styles when link is not active", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />, {
      route: "/another-route",
    });
    const navItemContainer = screen.getByTestId("Home").firstChild;
    expect(navItemContainer).not.toHaveStyle("border-left: solid");
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies correct icon color when link is active", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />, {
      route: "/home",
    });
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("stroke", "var(--primary-200, #177BA6)");
    expect(icon).toHaveAttribute("fill", "var(--primary-200, #177BA6)");
    expect(asFragment()).toMatchSnapshot();
  });

  it("applies correct icon color when link is not active", () => {
    const { asFragment } = renderWithRouter(<Navitem {...defaultProps} />, {
      route: "/another-route",
    });
    const icon = screen.getByTestId("mock-icon");
    expect(icon).not.toHaveAttribute("stroke", "var(--primary-200, #177BA6)");
    expect(icon).not.toHaveAttribute("fill", "var(--primary-200, #177BA6)");
    expect(asFragment()).toMatchSnapshot();
  });
});
