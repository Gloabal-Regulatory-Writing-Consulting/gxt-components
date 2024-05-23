import React from "react";
import styled, { css } from "styled-components";

export type TabProps = {
  onClickHandler: () => void;
  title: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $isActive?: boolean;
}

const TabButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0.25rem 0.25rem 1rem 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.0125rem;
  font-style: normal;
  transition: font-weight 0.2s ease-in-out;

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: var(--primary-200, #177ba6);
      font-weight: 700;
      border-bottom: 2px solid var(--primary-200, #177ba6);

      &:hover {
        color: var(--primary-400, #0a3a4c);
      }

      &:focus {
        border-color: var(--primary-100, #1c99ce);
        color: var(--primary-400, #0a3a4c);
      }

      &:disabled {
        border-color: var(--neutral-200, #9ca3af);
        color: var(--neutral-200, #9ca3af);
        cursor: not-allowed;
      }
    `}

  ${({ $isActive }) =>
    !$isActive &&
    css`
      color: var(--primary-200, #177ba6);
      font-weight: 400;

      &:hover {
        font-weight: 700;
      }

      &:disabled {
        color: var(--neutral-200, #9ca3af);
      }
    `}
`;

const Tab: React.FC<TabProps> = ({
  active = false,
  onClickHandler,
  title,
  disabled = false,
  className = "",
}) => {
  return (
    <TabButton
      onClick={onClickHandler}
      disabled={disabled}
      $isActive={active}
      className={className}
    >
      {title}
    </TabButton>
  );
};

export default Tab;
