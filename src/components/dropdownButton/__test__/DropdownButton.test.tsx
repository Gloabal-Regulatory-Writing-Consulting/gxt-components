import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DropdownButton from "../dropdownButton";

describe("Search Component", () => {
  it("button should be disabled", () => {
    render(<DropdownButton disabled={true} selectItems={[]} />);
  });

  it("button should be enabled", () => {
    render(<DropdownButton disabled={false} selectItems={[]} />);
  });

});
