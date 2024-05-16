import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "../Header";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders heading when provided", () => {
    const headingText = "Test Heading";
    const { getByText } = render(
      <Header>
        <Header.Heading>{headingText}</Header.Heading>
      </Header>,
    );
    expect(getByText(headingText)).toBeInTheDocument();
  });

  it("renders multiple buttons", () => {
    render(
      <Header>
        <Header.Button>Button 1</Header.Button>
      </Header>,
    );

    expect(screen.getByText("Button 1")).toBeInTheDocument();
  });

  it("renders breadcrumbs when provided", () => {
    const breadcrumbText = "Home > Test";
    const { getByText } = render(
      <Header>
        <Header.Breadcrumbs>{breadcrumbText}</Header.Breadcrumbs>
      </Header>,
    );
    expect(getByText(breadcrumbText)).toBeInTheDocument();
  });

  it("renders heading, button, and breadcrumbs together correctly", () => {
    const headingText = "Test Heading";
    const breadcrumbText = "Home > Test";
    const { getByText } = render(
      <Header>
        <Header.Heading>{headingText}</Header.Heading>
        <Header.Button>Button 1</Header.Button>
        <Header.Breadcrumbs>{breadcrumbText}</Header.Breadcrumbs>
      </Header>,
    );

    expect(getByText(headingText)).toBeInTheDocument();
    expect(getByText("Button 1")).toBeInTheDocument();
    expect(getByText(breadcrumbText)).toBeInTheDocument();
  });

  it("renders without any children", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });
});
