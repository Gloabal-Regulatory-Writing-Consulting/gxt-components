import React, { FC, ReactNode } from "react";
import {
  ModalFooter as StyledModalFooter,
  ModalHeader as StyledModalHeader,
  ModalHeaderBody as StyledModalHeaderBody,
  ModalHeaderHeading as StyledModalHeaderHeading,
  ModalOverlay as StyledModalOverlay,
  ModalWrapper as StyledModalWrapper,
} from "./Modal.styles";
import ReactPortal from "../ReactPortal/ReactPortal";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  overlayBackground?: string;
  showBackground?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  onClose?: () => void;
}

const Modal: FC<ModalProps> & {
  ModalHeader: typeof StyledModalHeader;
  ModalHeaderHeading: typeof StyledModalHeaderHeading;
  ModalHeaderBody: typeof StyledModalHeaderBody;
  ModalFooter: typeof StyledModalFooter;
} = ({
  children,
  overlayBackground = "var(--neutral, #00000099)",
  showBackground = true,
  maxWidth = "18rem",
  maxHeight,
  onClose,
  ...rest
}) => {
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <StyledModalOverlay
        overlayBackground={overlayBackground}
        showBackground={showBackground}
        onClick={onClose}
      >
        <StyledModalWrapper
          onClick={(e) => e.stopPropagation()}
          {...rest}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        >
          {children}
        </StyledModalWrapper>
      </StyledModalOverlay>
    </ReactPortal>
  );
};

Modal.ModalHeader = StyledModalHeader;
Modal.ModalHeaderHeading = StyledModalHeaderHeading;
Modal.ModalHeaderBody = StyledModalHeaderBody;
Modal.ModalFooter = StyledModalFooter;

export default Modal;
