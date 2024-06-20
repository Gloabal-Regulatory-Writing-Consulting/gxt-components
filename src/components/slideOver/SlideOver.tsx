import React, { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useSlots } from "../../hooks/useSlots";

type Position = "left" | "right";

const SlideOverContainer = styled.div<{
  $isOpen: boolean;
  $position: Position;
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
  ${({ $position, $isOpen, width }) => {
    const slideOverPosition = $position === "right" ? "right" : "left";
    const slideOverPositionValue = $isOpen ? "0" : `-${width}`;

    return `
    ${slideOverPosition}: ${slideOverPositionValue};
    transition: ${slideOverPosition} 0.3s ease-in-out;
    border-${$position === "right" ? "left" : "right"}: 1px solid var(--neutral-200, #9ca3af);
    `;
  }};
`;

const Header = styled.div`
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var(--neutral-200, #9ca3af);
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  gap: 0.25rem;
  padding: 1.5rem 1.25rem;
`;

const Content = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 1 1 1;
  flex-direction: column;
  height: 100%;
  gap: 1.25rem;
  padding: 1.5rem;
  overflow-y: auto;
`;

const Footer = styled.div`
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--neutral-200, #9ca3af);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 1000;
`;

const SlideOverOverlay = styled.div<{ $isOpen: boolean }>`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease-in-out;
  width: 100%;
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
  mountElementId?: string;
  dataTestId?: string;
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
  mountElementId = "root",
  dataTestId = "",
  ...rest
}) => {
  const [{ HeaderSlot, FooterSlot }, restChildren] = useSlots(children, {
    HeaderSlot: SlideOverHeader,
    FooterSlot: SlideOverFooter,
  });

  const slideOverComponent = (
    <>
      <SlideOverContainer
        $isOpen={isOpen}
        $position={position}
        className={slideOverClasses}
        style={slideOverStyles}
        width={width}
        data-testId={dataTestId}
        {...rest}
      >
        {HeaderSlot && <HeaderSlot />}
        <Content style={contentStyles} className={contentClasses}>
          {restChildren}
        </Content>
        {FooterSlot && <FooterSlot />}
      </SlideOverContainer>
      {isOpen && overlay && (
        <SlideOverOverlay
          $isOpen={isOpen}
          onClick={onClose}
          className={overlayClasses}
          style={overlayStyles}
        />
      )}
    </>
  );

  return ReactDOM.createPortal(
    slideOverComponent,
    document.getElementById(mountElementId) || document.body,
    `slideOver-${position}`,
  );
};

const SlideOverFooter = function FooterComponent({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <Footer {...props}>{children}</Footer>;
};

const SlideOverHeader = function HeaderComponent({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <Header {...props}>{children}</Header>;
};

SlideOver.displayName = "SlideOver";
SlideOver.Header = SlideOverHeader;
SlideOver.Footer = SlideOverFooter;

export default SlideOver;
