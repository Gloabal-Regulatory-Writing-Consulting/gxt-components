import React from "react";
import { it, expect, vi, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import SlideOver, { SlideOverHeader, SlideOverFooter } from "../SlideOver";

describe("SlideOver component", () => {
  it("renders with title", () => {
    const onClose = vi.fn();

    render(
      <SlideOver onClose={onClose} isOpen={true}>
        <SlideOverHeader>Sample SlideOver Title</SlideOverHeader>
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
        <SlideOverFooter>Sample SlideOver Footer</SlideOverFooter>
      </SlideOver>,
    );

    const footerElement = screen.getByText("Sample SlideOver Footer");
    const contentElement = screen.getByText("SlideOver content");

    expect(footerElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
