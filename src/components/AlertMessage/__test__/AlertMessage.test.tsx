import "@testing-library/jest-dom";
import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlertMessage from "../AlertMessage";

describe("AlertMessage", () => {
  const alertMessageProps = {
    alertMessage: "This is a positive message.",
    alertLink: "/details",
    linkText: "Learn more",
    alertType: "positive",
  };

  it("renders alert message", () => {
    const { getByText } = render(<AlertMessage {...alertMessageProps} />);
    expect(getByText("This is a positive message.")).toBeInTheDocument();
  });

  it("renders link with correct text", () => {
    const { getByText } = render(<AlertMessage {...alertMessageProps} />);
    const linkElement = getByText("Learn more");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/details");
  });

  it("renders check mark icon on positive message", () => {
    const { getByTestId } = render(<AlertMessage {...alertMessageProps} />);
    const checkMarkIcon = getByTestId("icon-check-mark");
    expect(checkMarkIcon).toBeInTheDocument();
  });

  it("renders warning icon on negative message", () => {
    const modifiedAlertProps = {
      ...alertMessageProps,
      alertType: "negative",
    };
    const { getByTestId } = render(<AlertMessage {...modifiedAlertProps} />);
    const checkMarkIcon = getByTestId("icon-warning");
    expect(checkMarkIcon).toBeInTheDocument();
  });

  it("renders cancel icon", () => {
    const { getByTestId } = render(<AlertMessage {...alertMessageProps} />);
    const cancelIcon = getByTestId("icon-cancel");
    expect(cancelIcon).toBeInTheDocument();
  });

  it("handles empty message prop without crashing", () => {
    const { container } = render(
      <AlertMessage {...alertMessageProps} alertMessage="" />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("handles empty linkText prop without crashing", () => {
    const { getByText } = render(
      <AlertMessage {...alertMessageProps} linkText="" />,
    );
    expect(getByText("This is a positive message.")).toBeInTheDocument();
  });

  it("handles undefined alertType prop without crashing", () => {
    const { container } = render(
      <AlertMessage {...alertMessageProps} alertType={undefined} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
