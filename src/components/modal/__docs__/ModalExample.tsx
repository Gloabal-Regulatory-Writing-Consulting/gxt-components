import React, { useState } from "react";
import Modal from "../Modal";
import { Button } from "../../button";

export const ModalExample = ({
  maxWidth,
  maxHeight,
  overlayBackground,
  showBackground,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Click to open modal
      </Button>

      {isOpen && (
        <Modal
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          overlayBackground={overlayBackground}
          showBackground={showBackground}
          onClose={handleClose}
        >
          <Modal.ModalHeader>
            <Modal.ModalHeaderHeading>Delete?</Modal.ModalHeaderHeading>
            <Modal.ModalHeaderBody>
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
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.ModalFooter>
        </Modal>
      )}
    </div>
  );
};
