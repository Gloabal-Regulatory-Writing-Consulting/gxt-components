import styled, { CSSProperties } from "styled-components";

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
  gap: 24px;
  padding: 24px;
  border-radius: 8px;
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
  gap: 8px;
`;

export const ModalHeaderHeading = styled.h2`
  color: var(--primary-200, #177ba6);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
`;

export const ModalHeaderBody = styled.div<{ styles?: CSSProperties }>`
  margin: 0;
  font-size: "16px";
  font-weight: 400;
  line-height: "150%";
  letter-spacing: "0.019px";
  ${(props) =>
    props.styles &&
    Object.entries(props.styles)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-self: stretch;
`;
