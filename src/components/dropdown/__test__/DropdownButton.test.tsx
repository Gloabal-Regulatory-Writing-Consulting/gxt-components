import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../Dropdown";

describe("Dropdown component", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const renderOption = vi.fn((option) => <div>{option}</div>);
  const onSelect = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly with select type", () => {
    render(
      <Dropdown
        type="select"
        options={options}
        renderOption={renderOption}
        onSelect={onSelect}
        placeholder="Select an option"
        position="bottom"
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));

    options.forEach((option) => {
      expect(screen.getAllByText(option)[0]).toBeInTheDocument();
    });
  });

  it("renders correctly with button type", () => {
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        placeholder="Select an option"
        position="bottom"
      />,
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("calls onSelect when an option is selected", () => {
    render(
      <Dropdown
        type="select"
        options={options}
        renderOption={renderOption}
        onSelect={onSelect}
        placeholder="Select an option"
        position="bottom"
      />,
    );

    fireEvent.click(screen.getByText("Option 1"));
    fireEvent.click(screen.getByText("Option 2"));

    expect(onSelect).toHaveBeenCalledWith("Option 2");
  });

  it("disables button when disabled prop is true", () => {
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        placeholder="Select an option"
        disabled={true}
        position="bottom"
      />,
    );

    const button = screen.getByText("Select an option").parentElement;
    expect(button).toBeInstanceOf(HTMLButtonElement);
    expect(button).toBeDisabled();
  });

  it("renders label correctly", () => {
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        label="Dropdown Label"
        placeholder="Select an option"
        position="bottom"
      />,
    );

    expect(screen.getByText("Dropdown Label")).toBeInTheDocument();
  });

  it("applies custom styles to container", () => {
    const customStyles = {
      container: { backgroundColor: "rgb(211, 211, 211)" },
    };
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        placeholder="Select an option"
        customStyles={customStyles}
        position="bottom"
      />,
    );

    const container =
      screen.getByText("Select an option").parentElement?.parentElement;
    expect(container).toHaveStyle("background-color: rgb(211, 211, 211)");
  });

  it("applies custom styles to label", () => {
    const customStyles = {
      label: { color: "rgb(255, 0, 0)" },
    };
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        label="Dropdown Label"
        placeholder="Select an option"
        customStyles={customStyles}
        position="bottom"
      />,
    );

    const label = screen.getByText("Dropdown Label");
    expect(label).toHaveStyle("color: rgb(255, 0, 0)");
  });

  it("applies custom styles to button", () => {
    const customStyles = {
      button: { borderColor: "blue" },
    };
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        placeholder="Select an option"
        customStyles={customStyles}
        position="bottom"
      />,
    );

    const button = screen.getByText("Select an option").parentElement;
    expect(button).toHaveStyle("border-color: blue");
  });

  it("applies custom styles to placeholder", () => {
    const customStyles = {
      placeholder: { color: "rgb(0, 128, 0)" },
    };
    render(
      <Dropdown
        type="button"
        options={options}
        renderOption={renderOption}
        placeholder="Select an option"
        customStyles={customStyles}
        position="bottom"
      />,
    );

    const placeholder = screen.getByText("Select an option");
    expect(placeholder).toHaveStyle("color: rgb(0, 128, 0)");
  });

  it("should render divided menu", () => {
    render(
      <Dropdown
        type="button"
        renderOption={renderOption}
        placeholder="Select an option"
        position="bottom"
        menuType="divided"
        groupedOptions={[
          {
            header: "Upload",
            options: ["Upload CSV", "Upload DOCX", "Upload PDF"],
          },
          {
            header: "Download",
            options: ["Download CSV", "Download DOCX", "Download PDF"],
          },
          {
            header: "",
            options: ["Close"],
          },
        ]}
      />,
    );

    const button = screen.getByRole("button", {
      name: "Select an option",
    });

    fireEvent.click(button);

    expect(screen.getByText("Upload")).toHaveStyle("font-weight: 700");
    expect(screen.getByText("Upload CSV")).toBeInTheDocument();
    expect(screen.getByText("Download")).toHaveStyle("font-weight: 700");
    expect(screen.getAllByTestId("divider")).toHaveLength(2);
  });
});
