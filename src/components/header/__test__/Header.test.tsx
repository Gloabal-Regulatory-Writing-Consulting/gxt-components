import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  it("renders buttons correctly", () => {
    render(
      <Header>
        <Header.Button>Button 1</Header.Button>
        <Header.Button>Button 2</Header.Button>
      </Header>,
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });

  it("renders heading correctly", () => {
    render(
      <Header>
        <Header.Heading>My Heading</Header.Heading>
      </Header>,
    );
    expect(screen.getByText("My Heading")).toBeInTheDocument();
  });

  it("renders breadcrumbs correctly", () => {
    render(
      <Header>
        <Header.Breadcrumbs>My Breadcrumbs</Header.Breadcrumbs>
      </Header>,
    );
    expect(screen.getByText("My Breadcrumbs")).toBeInTheDocument();
  });
});
