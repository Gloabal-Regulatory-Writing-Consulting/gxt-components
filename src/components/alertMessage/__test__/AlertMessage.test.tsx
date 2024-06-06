import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AlertMessage from "../AlertMessage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>,
  );
};

describe("AlertMessage", () => {
  const AlertMessageProps = {
    alertMessage: "This is a positive message.",
    alertLink: "/details",
    linkText: "Learn more",
    alertType: "positive",
    display: true,
  };

  it("renders alert message", () => {
    const { getByText } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} />,
    );
    expect(getByText("This is a positive message.")).toBeInTheDocument();
  });

  it("renders link with correct text", () => {
    const { getByText } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} />,
    );
    const linkElement = getByText("Learn more");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/details");
  });

  it("renders check mark icon on positive message", () => {
    const { getByTestId } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} />,
    );
    const checkMarkIcon = getByTestId("icon-check-mark");
    expect(checkMarkIcon).toBeInTheDocument();
  });

  it("renders warning icon on negative message", () => {
    const modifiedAlertProps = {
      ...AlertMessageProps,
      alertType: "negative",
    };
    const { getByTestId } = renderWithRouter(
      <AlertMessage {...modifiedAlertProps} />,
    );
    const checkMarkIcon = getByTestId("icon-warning");
    expect(checkMarkIcon).toBeInTheDocument();
  });

  it("renders cancel icon", () => {
    const { getByTestId } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} />,
    );
    const cancelIcon = getByTestId("icon-cancel");
    expect(cancelIcon).toBeInTheDocument();
  });

  it("handles empty message prop without crashing", () => {
    const { container } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} alertMessage="" />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it("handles empty linkText prop without crashing", () => {
    const { getByText } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} linkText="" />,
    );
    expect(getByText("This is a positive message.")).toBeInTheDocument();
  });

  it("handles undefined alertType prop without crashing", () => {
    const { container } = renderWithRouter(
      <AlertMessage {...AlertMessageProps} alertType={undefined} />,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
