import React, { FC, useState } from "react";
import Modal, { ModalProps } from "../Modal";
import { Button } from "../../button";

export const ModalExample: FC<ModalProps> = ({
  maxWidth,
  maxHeight,
  overlayBackground,
  overlay,
  isOpen,
}) => {
  const [isModalOpen, setIsModalOpenOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpenOpen(false);
  };
  const handleOpen = () => {
    setIsModalOpenOpen(true);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleOpen}>
        Click to open modal
      </Button>

      <Modal
        isOpen={isOpen || isModalOpen}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        overlayBackground={overlayBackground}
        overlay={overlay}
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
    </div>
  );
};
