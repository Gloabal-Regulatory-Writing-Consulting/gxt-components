import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useMatch } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

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

describe("Breadcrumbs", () => {
  const breadcrumbItems = [
    { label: "Catalog", to: "/" },
    { label: "View Complaint", to: "/1/view-complaint" },
  ];

  it("renders breadcrumb items", () => {
    const { getByText } = renderWithRouter(
      <Breadcrumbs items={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    expect(getByText("Catalog")).toBeInTheDocument();
    expect(getByText("View Complaint")).toBeInTheDocument();
  });

  it("renders chevron icon between breadcrumb items", () => {
    const { getAllByTestId } = renderWithRouter(
      <Breadcrumbs items={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    const chevrons = getAllByTestId("chevron-right-icon");
    expect(chevrons.length).toBe(1);
  });

  it("applies active style to the current link", () => {
    const { getByText } = renderWithRouter(
      <Breadcrumbs items={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    const activeLink = getByText("Catalog");
    expect(activeLink).toHaveStyle("color: var(--primary-300, #115873);");
  });

  it("apply inactive style to non-current links", () => {
    const { getByText } = renderWithRouter(
      <Breadcrumbs items={breadcrumbItems} isLinkActive={IsLinkActive} />,
    );
    const inactiveLink = getByText("View Complaint");
    expect(inactiveLink).toHaveStyle("color: var(--neutral-200, #9CA3AF);");
  });

  it("handles empty items array without crashing", () => {
    const { container } = renderWithRouter(
      <Breadcrumbs items={[]} isLinkActive={IsLinkActive} />,
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("handles undefined items prop without crashing", () => {
    const { container } = renderWithRouter(
      <Breadcrumbs items={undefined} isLinkActive={IsLinkActive} />,
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
