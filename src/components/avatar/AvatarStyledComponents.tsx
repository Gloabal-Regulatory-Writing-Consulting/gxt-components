import styled, { css } from "styled-components";
import { SvgIcon } from "../svg";

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

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
  background: var(--Semantic-Tokens-Fills-Component-Primary-primary-default, #177BA6);
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
    border: 2px solid var(--Semantic-Tokens-Borders-Primary-border-primary-default, #177BA6);
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
        color: var(--Semantic-Tokens-Text-text-medium, #9CA3AF);
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
  color: var(--Semantic-Tokens-Text-text-light, #FFF);
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

export const StyledIcon = styled(SvgIcon)`
  padding: 0.25rem;
  position: absolute;
  bottom: -8px;
  right: ${({ size }) => (size === 8 ? "0" : "5px")};
  border-radius: 50%;
  background-color: lightgrey;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-50, #1C99CE);;
    color: white;
  }
`;
