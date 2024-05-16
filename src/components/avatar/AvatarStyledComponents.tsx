import styled, { css } from "styled-components";
import { SvgIcon } from "../svg";

export const theme = {
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.5rem",
    xLarge: "2.25rem",
  },
  lineHeights: {
    small: "0.4rem",
    medium: "0.8rem",
    large: "1rem",
    xLarge: "2.5rem",
  },
};

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  &.expanded-avatar {
    margin-left: 1rem;
    transition: width 0.3s ease;
  }
`;

export const AvatarIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AvatarBox = styled.div`
  position: relative;
`;

export const AvatarButton = styled.button<{ size: "small" | "large" }>`
  border-style: solid;
  border-width: 1px;
  border-color: #78858e;
  border-radius: 9999px;
  background-position: center;
  overflow: hidden;
  position: relative;
  display: inline-block;

  ${({ size }) =>
    size === "small" &&
    css`
      height: 2rem;
      width: 2rem;
      padding: 0 0;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      height: 4.25rem;
      width: 4.5rem;
      padding: 0 0;
    `}
`;

export const AvatarContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-size: contain;
`;

export const AvatarText = styled.p<{
  weight?: string;
  size: "small" | "large";
}>`
  color: #000;
  margin-left: 0.5rem;

  ${({ weight }) =>
    weight === "bold" &&
    css`
      font-weight: bold;
    `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.small};
      line-height: ${({ theme }) => theme.lineHeights.small};
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.large};
      line-height: ${({ theme }) => theme.lineHeights.large};
    `}
`;

export const UserInitials = styled.div<{ size: "small" | "large" }>`
  width: 100%;
  align-items: center;
  color: slate-300;

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.medium};
      line-height: ${({ theme }) => theme.lineHeights.medium};
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xLarge};
      line-height: ${({ theme }) => theme.lineHeights.xLarge};
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
  border-radius: 9999px;
  background-color: lightgrey;
  cursor: pointer;

  &:hover {
    background-color: primary_bg_color;
    color: white;
  }
`;
