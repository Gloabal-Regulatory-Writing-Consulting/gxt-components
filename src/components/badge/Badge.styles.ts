import styled, { css } from "styled-components";

export type BadgeVariantType = "basic" | "autosave" | "nosave" | "disabled";

interface BadgeContainerProps {
  type: BadgeVariantType;
}

const BasicBadge = css`
  background: var(--system-50, #fff);
  color: var(--neutral-400, #414141);
  border: 1px solid var(--neutral-200, #9ca3af);

  &:hover {
    border: 1px solid var(--primary-200, #177ba6);
  }

  &:active {
    border: 1px solid var(--primary-100, #1c99ce);
  }
`;

const AutosaveBadge = css`
  background: var(--positive-50, #34d399);
  color: var(--positive-200, #065f46);
  border: 1px solid transparent;
  border-radius: 0.75rem;
  padding: 0.125rem 0.75rem;
  font-size: 1rem;
`;

const NosaveBadge = css`
  background: var(--neutral-100, #e5e7eb);
  color: var(--neutral-400, #414141);
  border: 1px solid transparent;
  border-radius: 0.75rem;
  padding: 0.125rem 0.75rem;
  font-size: 1rem;
`;

const DisabledBadge = css`
  background: var(--neutral-50, #f9fafb);
  color: var(--neutral-200, #9ca3af);
  cursor: not-allowed;
  border: 1px solid var(--neutral-200, #9ca3af);
`;

const getBadgeStyles = (type: BadgeVariantType) => {
  switch (type) {
    case "basic":
      return BasicBadge;
    case "autosave":
      return AutosaveBadge;
    case "nosave":
      return NosaveBadge;
    case "disabled":
      return DisabledBadge;
    default:
      return BasicBadge;
  }
};

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.014px;
  cursor: pointer;
  transition: border-color 0.2s ease-in-out;

  ${({ type }) => getBadgeStyles(type)}
`;
