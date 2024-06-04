import styled, { keyframes } from "styled-components";

type Position = "top" | "bottom" | "left" | "right";
export interface TooltipBoxProps {
  background: string;
  position: Position;
  color: string;
}

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.div`
  font-size: inherit;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const TooltipContainer = styled.div<{ position: Position }>`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 10px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return `
          bottom: unset;
          top: calc(100% + 10px);
        `;
      case "left":
        return `
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 10px);
          min-width: max-content;
          max-width: 300px;;
          white-space: normal;
          word-break: break-word;
        `;

      case "right":
        return `
          margin-left: 0;
          width: 100%;
          right: unset;
          top: 50%;
          left: calc(100% + 10px);
          min-width: max-content;
          max-width: 300px;;
          white-space: normal;
          word-break: break-word;
        `;
      default:
        return ``;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TooltipBox = styled.span<TooltipBoxProps>`
  position: relative;
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  border-radius: 5px;
  padding: 8px;
  font-size: 1rem;
  min-width: fit-content;
  max-width: 300px;
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.2);

  animation: ${fadeIn} 0.5s linear;
  &:after {
    content: "";
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ background }) => background} transparent transparent
      transparent;
    left: calc(50% - 5px);
    top: 100%;
  }

  ${({ position, background }) => {
    switch (position) {
      case "bottom":
        return `
          &:after {
            border-color: transparent transparent ${background} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return `
          &:after {
            border-color: transparent transparent transparent ${background};
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case "right":
        return `
          &:after {
            border-color: transparent ${background} transparent transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return ``;
    }
  }}
`;
