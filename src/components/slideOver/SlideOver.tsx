import React, { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSlots } from "../../utils/useSlots";

type Position = "left" | "right";

const SlideOverContainer = styled.div<{
  isOpen: boolean;
  position: Position;
  width: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: white;
  color: black;
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: ${({ width }) => width};
  ${({ position, isOpen, width }) => {
    const slideOverPosition = position === "right" ? "right" : "left";
    const slideOverPositionValue = isOpen ? "0" : `-${width}`;

    return `
    ${slideOverPosition}: ${slideOverPositionValue};
    transition: ${slideOverPosition} 0.3s ease-in-out;
    border-${position === "right" ? "left" : "right"}: 1px solid var(--neutral-50, #9ca3af);
    `;
  }};
`;

const Header = styled.div`
  box-sizing: border-box;
  padding: 1.25rem;
  font-size: 1.5rem;
  border-bottom: 1px solid var(--neutral-50, #9ca3af);
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Footer = styled.div`
  box-sizing: border-box;
  padding: 1.25rem;
  background-color: white;
  color: black;
  border-top: 1px solid var(--neutral-50, #9ca3af);
  z-index: 1000;
`;

const SlideOverOverlay = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

export interface SlideOverProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpen?: boolean;
  position?: Position;
  overlay?: boolean;
  width?: string;
  slideOverClasses?: string;
  overlayClasses?: string;
  contentClasses?: string;
  slideOverStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
  overlayStyles?: React.CSSProperties;
}

const SlideOver: FC<SlideOverProps> & {
  Header: typeof SlideOverHeader;
  Footer: typeof SlideOverFooter;
} = ({
  onClose,
  children,
  isOpen = false,
  position = "right",
  overlay = true,
  width = "18.75rem",
  slideOverClasses = "",
  overlayClasses = "",
  contentClasses = "",
  slideOverStyles = {},
  contentStyles = {},
  overlayStyles = {},
}) => {
  const [{ header, footer }, restChildren] = useSlots(children, {
    header: SlideOverHeader,
    footer: SlideOverFooter,
  });

  const slideOverComponent = (
    <>
      <SlideOverContainer
        isOpen={isOpen}
        position={position}
        className={slideOverClasses}
        style={slideOverStyles}
        width={width}
      >
        {header}
        <Content style={contentStyles} className={contentClasses}>
          {restChildren}
        </Content>
        {footer}
      </SlideOverContainer>
      {isOpen && overlay && (
        <SlideOverOverlay
          isOpen={isOpen}
          onClick={onClose}
          className={overlayClasses}
          style={overlayStyles}
        />
      )}
    </>
  );

  return ReactDOM.createPortal(
    slideOverComponent,
    document.body,
    `slideOver-${position}`,
  );
};

const SlideOverFooter = function FooterComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Footer>{children}</Footer>;
};

const SlideOverHeader = function HeaderComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Header>{children}</Header>;
};

SlideOver.displayName = "SlideOver";
SlideOver.Header = SlideOverHeader;
SlideOver.Footer = SlideOverFooter;

export default SlideOver;
