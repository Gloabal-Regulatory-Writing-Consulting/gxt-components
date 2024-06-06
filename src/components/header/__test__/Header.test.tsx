import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header, { Actions, HeadingComponent } from "../Header";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes, useMatch } from "react-router-dom";

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

const IsLinkActive = (path: string) => !!useMatch(`${path}/*`);

describe("Header component", () => {
  it("should render the children correctly", () => {
    render(
      <Header>
        <Header.Heading>Page Title</Header.Heading>
        <Header.Actions>
          <button>Action 1</button>
          <button>Action 2</button>
        </Header.Actions>
        <div>Additional Content</div>
      </Header>,
    );

    expect(screen.getByText("Page Title")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getByText("Additional Content")).toBeInTheDocument();
  });

  it("should render without any children", () => {
    render(<Header />);
    expect(screen.queryByText("Page Title")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryByText("Additional Content")).not.toBeInTheDocument();
  });
});

describe("HeadingComponent", () => {
  it("should render the heading correctly", () => {
    render(<HeadingComponent>Page Title</HeadingComponent>);
    expect(screen.getByText("Page Title")).toBeInTheDocument();
  });

  it("should apply additional props to the heading", () => {
    render(
      <HeadingComponent data-testid="custom-heading">
        Page Title
      </HeadingComponent>,
    );
    expect(screen.getByTestId("custom-heading")).toBeInTheDocument();
  });
});

describe("Actions", () => {
  it("should render the actions correctly", () => {
    render(
      <Actions>
        <button>Action 1</button>
        <button>Action 2</button>
      </Actions>,
    );
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("should apply additional props to the actions container", () => {
    render(
      <Actions data-testid="custom-actions">
        <button>Action 1</button>
        <button>Action 2</button>
      </Actions>,
    );
    expect(screen.getByTestId("custom-actions")).toBeInTheDocument();
  });
});

describe("Breadcrumbs", () => {
  it("should render Breadcrumbs if breadcrumbItems are provided", () => {
    const breadcrumbItems = [
      { label: "Home", to: "/" },
      { label: "Page", to: "/page" },
    ];

    renderWithRouter(
      <Header breadcrumbItems={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Page")).toBeInTheDocument();
  });

  it("should render correct color for active Breadcrumbs link", () => {
    const breadcrumbItems = [
      { label: "Home", to: "/", active: true },
      { label: "Page", to: "/page" },
    ];

    renderWithRouter(
      <Header breadcrumbItems={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    expect(screen.getByText("Home")).toHaveStyle(
      "color: var(--primary-300, #115873);",
    );
  });
});
