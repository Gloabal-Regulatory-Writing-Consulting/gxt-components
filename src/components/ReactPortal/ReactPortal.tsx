import { useState, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface ReactPortalProps {
  children: ReactNode;
  wrapperId?: string;
  mountElementId?: string;
}
const createWrapperAndAppendToBody = (
  wrapperId: string,
  mountElementId: string,
) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  const mountElement = document.getElementById(mountElementId) || document.body;
  mountElement.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId = "react-portal-wrapper",
  mountElementId = "root",
}: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null,
  );

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId, mountElementId);
    }
    setWrapperElement(element as HTMLDivElement);

    return () => {
      // delete the programatically created element
      if (systemCreated && element!.parentNode) {
        element!.parentNode.removeChild(element!);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
