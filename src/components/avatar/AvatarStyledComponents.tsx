import styled, { css } from "styled-components";
import Pencil from "../../assets/icons/pencil.svg";

export const AvatarContainer = styled.div<{ size: "small" | "large" }>`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 2rem;

  ${({ size }) =>
    size === "small" &&
    css`
      height: 2.1rem;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      height: 4.1rem;
    `}

  &.expanded-avatar {
    transition: width 0.3s ease;
  }
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.75rem;
`;

export const AvatarBox = styled.div`
  position: relative;
`;

export const AvatarButton = styled.div<{ size: "small" | "large" }>`
  background: var(--primary-200, #177ba6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  overflow: clip;

  ${({ size }) =>
    size === "small" &&
    css`
      height: 32px;
      width: 32px;
      border-radius: 50%;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      height: 64px;
      width: 64px;
      border-radius: 50%;
    `}

    ${AvatarContainer}:hover & {
    border: 2px solid var(--primary-200, #177ba6);
  }
`;

export const AvatarText = styled.p<{
  weight?: string;
  size: "small" | "large";
}>`
  color: #000;
  margin: 0;

  ${({ weight }) =>
    weight === "bold" &&
    css`
      font-weight: 700;
    `}

  ${({ weight }) =>
    weight === "normal" &&
    css`
      font-weight: 400;
      ${AvatarContainer}:focus & {
        color: var(--neutral-200, #9ca3af);
      }
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 1rem;
      line-height: 150%;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 2rem;
      line-height: 150%;
    `}
`;

export const UserInitials = styled.div<{ size: "small" | "large" }>`
  color: var(--system-50, #ffffff);
  text-align: center;

  font-family: Mulish;
  font-style: normal;
  line-height: 150%;

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 0.75rem;
      font-weight: 400;
      letter-spacing: 0.014px;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.024px;
    `}
`;

export const UserIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const StyledIcon = styled(Pencil)<{ size: number }>`
  padding: 0.25rem;
  position: absolute;
  bottom: -8px;
  border-radius: 50%;
  background-color: lightgrey;
  cursor: pointer;
  ${({ size }) => {
    return `
    right: ${size === 8 ? "0" : "5px"};
    width: ${size}px;
    height: ${size}px;
    `;
  }}
  &:hover {
    background-color: var(--primary-50, #1c99ce);
    color: white;
  }
`;

export const AvatarTextContainer = styled.div`
  width: 15.7rem;
`;
