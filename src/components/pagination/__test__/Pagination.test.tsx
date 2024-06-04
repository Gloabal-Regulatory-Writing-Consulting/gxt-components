import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "../Pagination";

describe("Pagination component", () => {
  const onPageChange = vi.fn();
  const handlePerPageChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with default props", () => {
    render(
      <Pagination
        currentPage={0}
        itemsPerPage={20}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
      />,
    );

    expect(screen.getByText("documents per page")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "20" })).toBeInTheDocument();
  });

  it("renders correctly with custom label and per page options", () => {
    render(
      <Pagination
        currentPage={0}
        itemsPerPage={20}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
        label="entries"
        perPageOptions={[5, 10, 15, 20]}
      />,
    );

    expect(screen.getByText("entries per page")).toBeInTheDocument();
  });

  it("calls onPageChange with the correct page number when pagination controls are clicked", () => {
    render(
      <Pagination
        currentPage={2}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
      />,
    );

    fireEvent.click(screen.getByTestId("first-page-icon"));
    expect(onPageChange).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByTestId("previous-page-icon"));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByTestId("next-page-icon"));
    expect(onPageChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByTestId("last-page-icon"));
    expect(onPageChange).toHaveBeenCalledWith(9);
  });

  it("disables first and previous page icons when at the beginning of the page range", () => {
    render(
      <Pagination
        currentPage={0}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
      />,
    );

    expect(screen.getByTestId("first-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByTestId("previous-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
  });

  it("disables next and last page icons when at the end of the page range", () => {
    render(
      <Pagination
        currentPage={9}
        itemsPerPage={10}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
      />,
    );

    expect(screen.getByTestId("next-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByTestId("last-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
  });

  it("calls handlePerPageChange with the selected number of items per page", () => {
    render(
      <Pagination
        currentPage={0}
        itemsPerPage={25}
        totalItems={100}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
        perPageOptions={[10, 25, 50, 100]}
      />,
    );

    fireEvent.click(screen.getByText("25"));

    fireEvent.click(screen.getByText("50"));

    expect(handlePerPageChange).toHaveBeenCalledWith(50);
  });

  it("displays the correct number of pages and disables controls when total items is less than items per page", () => {
    render(
      <Pagination
        currentPage={0}
        itemsPerPage={10}
        totalItems={5}
        onPageChange={onPageChange}
        handlePerPageChange={handlePerPageChange}
        label="entries"
      />,
    );

    expect(screen.getByTestId("next-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByTestId("previous-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByTestId("next-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByTestId("next-page-icon")).toHaveStyle({
      cursor: "not-allowed",
    });
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("entries per page")).toBeInTheDocument();
  });
});
