import styled from "styled-components";

interface OverlayProps {
  overlayBackground: string;
  showBackground: boolean;
}

interface WrapperProps {
  maxWidth: string;
  maxHeight?: string;
}

export const ModalOverlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.showBackground && `background: ${props.overlayBackground};`}
  z-index: 999;
`;

export const ModalWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--neutral-100, #e5e7eb);
  background: var(--System-50, #fff);
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight || "none"};
  @media screen and (max-width: 600px) {
    max-width: 90%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ModalHeaderHeading = styled.h2`
  color: var(--primary-200, #177ba6);
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

export const ModalHeaderBody = styled.div`
  margin: 0;
  font-size: "1rem";
  font-weight: 400;
  line-height: "150%";
  letter-spacing: "0.019px";
  color: "var(--neutral-300, #4B5563)";
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  align-self: stretch;
`;
