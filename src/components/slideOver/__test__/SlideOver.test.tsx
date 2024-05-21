import React from "react";
import { it, expect, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import SlideOver from "../SlideOver";

describe("SlideOver component", () => {
  it("renders with title", () => {
    const onClose = vi.fn();

    render(
      <SlideOver onClose={onClose} isOpen={true}>
        <SlideOver.Header>Sample SlideOver Title</SlideOver.Header>
      </SlideOver>,
    );

    const slideOverElement = screen.getByText("Sample SlideOver Title");

    expect(slideOverElement).toBeInTheDocument();
  });

  it("renders with custom header", () => {
    const onClose = vi.fn();

    render(
      <SlideOver onClose={onClose} isOpen={true}>
        SlideOver content
      </SlideOver>,
    );

    const contentElement = screen.getByText("SlideOver content");

    expect(contentElement).toBeInTheDocument();
  });

  it("renders with custom footer", () => {
    const onClose = vi.fn();

    render(
      <SlideOver onClose={onClose} isOpen={true}>
        SlideOver content
        <SlideOver.Footer>Sample SlideOver Footer</SlideOver.Footer>
      </SlideOver>,
    );

    const footerElement = screen.getByText("Sample SlideOver Footer");
    const contentElement = screen.getByText("SlideOver content");

    expect(footerElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
