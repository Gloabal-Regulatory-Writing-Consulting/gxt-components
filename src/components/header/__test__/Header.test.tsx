import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header, { Actions, HeadingComponent, Breadcrumbs } from "../Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  it("should render the children correctly", () => {
    render(
      <Header>
        <Header.Heading>Page Title</Header.Heading>
        <Header.Actions>
          <button>Action 1</button>
          <button>Action 2</button>
        </Header.Actions>
        <Header.Breadcrumbs>
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Page</a>
        </Header.Breadcrumbs>
        <div>Additional Content</div>
      </Header>,
    );

    expect(screen.getByText("Page Title")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText("Additional Content")).toBeInTheDocument();
  });

  it("should render without any children", () => {
    render(<Header />);
    expect(screen.queryByText("Page Title")).not.toBeInTheDocument();
    expect(screen.queryAllByRole("button")).toHaveLength(0);
    expect(screen.queryAllByRole("link")).toHaveLength(0);
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
  it("should render the breadcrumbs correctly", () => {
    render(
      <Breadcrumbs>
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Page</a>
      </Breadcrumbs>,
    );
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText("/")).toBeInTheDocument();
  });

  it("should apply additional props to the breadcrumbs container", () => {
    render(
      <Breadcrumbs data-testid="custom-breadcrumbs">
        <a href="#">Home</a>
        <span>/</span>
        <a href="#">Page</a>
      </Breadcrumbs>,
    );
    expect(screen.getByTestId("custom-breadcrumbs")).toBeInTheDocument();
  });
});
