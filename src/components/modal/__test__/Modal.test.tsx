import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Modal, {
  ModalHeader,
  ModalHeaderHeading,
  ModalHeaderBody,
  ModalFooter,
} from "../Modal";

describe("Modal component", () => {
  it("renders header heading correctly", () => {
    render(
      <Modal>
        <ModalHeader>
          <ModalHeaderHeading>Test Heading</ModalHeaderHeading>
        </ModalHeader>
      </Modal>,
    );
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  it("renders header body correctly", () => {
    render(
      <Modal>
        <ModalHeader>
          <ModalHeaderBody styles={{}}>Test Body</ModalHeaderBody>
        </ModalHeader>
      </Modal>,
    );
    expect(screen.getByText("Test Body")).toBeInTheDocument();
  });

  it("renders footer buttons correctly", () => {
    render(
      <Modal>
        <ModalFooter>
          <button>Confirm</button>
          <button>Cancel</button>
        </ModalFooter>
      </Modal>,
    );
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("renders full modal structure correctly", () => {
    render(
      <Modal>
        <ModalHeader>
          <ModalHeaderHeading>Full Modal Heading</ModalHeaderHeading>
          <ModalHeaderBody styles={{}}>Full Modal Body</ModalHeaderBody>
        </ModalHeader>
        <ModalFooter>
          <button>Confirm</button>
          <button>Cancel</button>
        </ModalFooter>
      </Modal>,
    );
    expect(screen.getByText("Full Modal Heading")).toBeInTheDocument();
    expect(screen.getByText("Full Modal Body")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
});
