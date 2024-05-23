import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Modal from "../Modal";

describe("Modal Component", () => {
  it("should render the modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} maxHeight="20rem">
        <Modal.ModalHeader>
          <Modal.ModalHeaderHeading>Test Modal</Modal.ModalHeaderHeading>
          <Modal.ModalHeaderBody>Modal Body Content</Modal.ModalHeaderBody>
        </Modal.ModalHeader>
        <Modal.ModalFooter>
          <button>Confirm</button>
          <button>Cancel</button>
        </Modal.ModalFooter>
      </Modal>,
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Body Content")).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("should not render the modal when isOpen is false", () => {
    render(
      <Modal isOpen={false}>
        <Modal.ModalHeader>
          <Modal.ModalHeaderHeading>Test Modal</Modal.ModalHeaderHeading>
        </Modal.ModalHeader>
      </Modal>,
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("should call onClose when clicking outside the modal overlay", () => {
    const handleClose = vi.fn();

    render(
      <Modal isOpen={true} onClose={handleClose}>
        <Modal.ModalHeader>
          <Modal.ModalHeaderHeading>Test Modal</Modal.ModalHeaderHeading>
        </Modal.ModalHeader>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId("modal-overlay"));
    expect(handleClose).toHaveBeenCalled();
  });
});
