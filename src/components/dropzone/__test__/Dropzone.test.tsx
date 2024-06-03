import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Dropzone from "../Dropzone";
import React from "react";

describe("Dropzone component", () => {
  it("should render without errors", () => {
    render(<Dropzone />);
    expect(screen.getByTestId("dropzone")).toBeInTheDocument();
    expect(screen.getByTestId("dropzone")).toMatchSnapshot();
  });
});

export default Dropzone;
