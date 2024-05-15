import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../Search";

describe("Search Component", () => {
  const onClickHandler = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render without crashing", () => {
    render(<Search onChangeCallback={onClickHandler} />);
  });

  it("should render with default props", () => {
    render(<Search onChangeCallback={onClickHandler} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should render with custom props", () => {
    render(
      <Search
        onChangeCallback={onClickHandler}
        placeholder="Type here to search"
        className="custom-search"
        debounceTime={200}
      />,
    );
    expect(
      screen.getByPlaceholderText("Type here to search"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("search")).toHaveClass("custom-search");
  });

  it("should call onChangeCallback with correct search term", async () => {
    render(<Search onChangeCallback={onClickHandler} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "apple" },
    });
    await waitFor(() => {
      expect(onClickHandler).toHaveBeenCalledWith("apple");
    });
  });

  it("should debounce onChangeCallback", async () => {
    render(<Search onChangeCallback={onClickHandler} />);
    const input = screen.getByTestId("search") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    await waitFor(
      () => {
        expect(onClickHandler).toHaveBeenCalledWith("test");
      },
      { timeout: 1000 },
    );
  });

  it("should call the onChangeCallback with empty string if input value becomes empty after debounce time", async () => {
    const { getByTestId } = render(
      <Search onChangeCallback={onClickHandler} />,
    );
    const input = getByTestId("search") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.change(input, { target: { value: "" } });

    await waitFor(
      () => {
        expect(onClickHandler).toHaveBeenCalledWith("");
      },
      { timeout: 600 },
    );
  });
});
