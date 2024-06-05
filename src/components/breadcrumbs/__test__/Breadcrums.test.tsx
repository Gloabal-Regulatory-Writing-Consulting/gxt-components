import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs", () => {
  const breadcrumbItems = [
    { label: "Catalog", link: "/"},
    { label: "View Complaint", link: "/1/view-complaint" },
  ];

  it("renders breadcrumb items", () => {
    const { getByText } = render(<Breadcrumbs items={breadcrumbItems} />);
    expect(getByText("Catalog")).toBeInTheDocument();
    expect(getByText("View Complaint")).toBeInTheDocument();
  });

  it("renders chevron icon between breadcrumb items", () => {
    const { getAllByTestId } = render(<Breadcrumbs items={breadcrumbItems} />);
    const chevrons = getAllByTestId("chevron-icon");
    expect(chevrons.length).toBe(1);
  });

  it("applies active style to the current link", () => {
    const { getByText } = render(<Breadcrumbs items={breadcrumbItems} />);
    const activeLink = getByText("Catalog");
    expect(activeLink).toHaveStyle("color: var(--primary-300, #115873);");
  });

  it("apply inactive style to non-current links", () => {
    const { getByText } = render(<Breadcrumbs items={breadcrumbItems} />);
    const inactiveLink = getByText("View Complaint");
    expect(inactiveLink).toHaveStyle("color: var(--neutral-200, #9CA3AF);");
  });

  it("handles empty items array without crashing", () => {
    const { container } = render(<Breadcrumbs items={[]} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("handles undefined items prop without crashing", () => {
    const { container } = render(<Breadcrumbs items={undefined} />);
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
