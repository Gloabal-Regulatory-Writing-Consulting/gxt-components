import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "jest-styled-components";

import Divider from "../Divider";

describe("Divider", () => {
  test("renders horizontal divider with light color", () => {
    render(<Divider layout="horizontal" color="light" />);
    expect(screen.getByTestId("divider")).toMatchSnapshot();
  });

  test("renders vertical divider with medium color", () => {
    render(<Divider layout="vertical" color="medium" />);
    expect(screen.getByTestId("divider")).toMatchSnapshot();
  });
});
