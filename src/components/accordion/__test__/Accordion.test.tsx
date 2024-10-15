import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import Accordion from "../Accordion";

describe("Accordion", () => {
  it("renders search box when isSearchAble is true", () => {
    const { getByTestId } = render(
      <Accordion isSearchAble={true} isAccordionOpen={true}>
        <Accordion.Header key="1">Header</Accordion.Header>
        <Accordion.Content key="2">here is content</Accordion.Content>
      </Accordion>,
    );
    const searchElement = getByTestId("search");
    expect(searchElement).toBeInTheDocument();
  });

  it("does not render search box when isSearchAble is false", () => {
    const { queryByText } = render(
      <Accordion isSearchAble={false} isAccordionOpen={true}>
        <Accordion.Header key="1">Header</Accordion.Header>
        <Accordion.Content key="2">here is content</Accordion.Content>
      </Accordion>,
    );
    expect(queryByText("Search")).not.toBeInTheDocument();
  });

  it("calls onChangeCallback when search box input changes", async () => {
    const onChangeCallback = vi.fn();
    const { getByPlaceholderText } = render(
      <Accordion isSearchAble={true} isAccordionOpen={true}>
        <Accordion.Header key="1">Header</Accordion.Header>
        <Accordion.Content key="2" onChangeCallback={onChangeCallback}>
          here is content
        </Accordion.Content>
      </Accordion>,
    );
    const inputElement = getByPlaceholderText(
      "Search options...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test" } });
    await waitFor(
      () => {
        expect(onChangeCallback).toHaveBeenCalledTimes(1);
        expect(onChangeCallback).toHaveBeenCalledWith("test");
      },
      { timeout: 1000 },
    );
  });
});
