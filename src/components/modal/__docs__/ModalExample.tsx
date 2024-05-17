import React from "react";
import Modal from "../Modal";
import { Button } from "../../button";

export const ModalExample = ({
  maxWidth,
  maxHeight,
  overlayBackground,
  showBackground,
}) => (
  <div>
    <Modal
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      overlayBackground={overlayBackground}
      showBackground={showBackground}
    >
      <Modal.ModalHeader>
        <Modal.ModalHeaderHeading>Delete?</Modal.ModalHeaderHeading>
        <Modal.ModalHeaderBody
          styles={{
            color: "var(--neutral-300, #4B5563)",
          }}
        >
          Are you sure you want to delete template(s)?
        </Modal.ModalHeaderBody>
        <Modal.ModalHeaderBody>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              color: "var(--negative-100, #EF4444)",
              fontWeight: 700,
              alignSelf: "center",
            }}
          >
            Template(s) are being used in multiple documents
          </div>
        </Modal.ModalHeaderBody>
      </Modal.ModalHeader>
      <Modal.ModalFooter>
        <Button variant="primary">Confirm</Button>
        <Button variant="secondary">Cancel</Button>
      </Modal.ModalFooter>
    </Modal>
  </div>
);
