import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import styled from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "negative" | "positive";
  children: ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  border-radius: 0.25rem;

  /* shadow/sm */

  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  /* Body/Body bold */
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 1.5rem */
  letter-spacing: 0.00119rem;
`;

const PrimaryStyledButton = styled(StyledButton)`
  background: var(--primary-200, #177ba6);
  border-color: var(--primary-200, #177ba6);
  color: var(--system-50, #fff);

  &:hover {
    font-weight: 700;
    background: var(--primary-300, #115873);
    border-color: var(--primary-300, #115873);
    color: var(--system-50, #fff);
  }

  &:focus {
    border: 2px solid var(--primary-200, #177ba6);
    background: var(--primary-50, #2aace2);
    color: var(--system-50, #fff);
  }

  &:disabled {
    background: var(--neutral-50, #f9fafb);
    border-color: var(--neutral-50, #f9fafb);
    color: var(--neutral-50, #9ca3af);
  }
`;

const SecondaryStyledButton = styled(StyledButton)`
  height: 2.625rem;
  flex-shrink: 0;
  border: 1px solid var(--neutral-50, #9ca3af);
  background: var(--system-50, #fff);
  color: var(--primary-200, #177ba6);

  &:hover {
    border: 1px solid var(--neutral-100, #1c99ce);
    color: var(--primary-200, #177ba6);
  }

  &:focus {
    border: 2px solid var(--primary-200, #177ba6);
  }

  &:disabled {
    background: var(--neutral-50, #f9fafb);
    border-color: var(--neutral-50, #f9fafb);
    color: var(--neutral-200, #9ca3af);
  }
`;

const NegativeStyledButton = styled(StyledButton)`
  background: var(--negative-100, #ef4444);
  border-color: var(--negative-100, #ef4444);
  color: var(--system-50, #fff);

  &:hover {
    background: var(--negative-200, #7f1d1d);
    border-color: var(--negative-200, #7f1d1d);
  }

  &:focus {
    border: 2px solid var(--negative-200, #7f1d1d);
    background: var(--negative-50, #f87171);
  }

  &:disabled {
    background: var(--neutral-50, #f9fafb);
    border-color: var(--neutral-50, #f9fafb);
    color: var(--neutral-200, #9ca3af);
  }
`;

const PositiveStyledButton = styled(StyledButton)`
  background: var(--positive-100, #059669);
  border-color: var(--positive-100, #059669);
  color: var(--system-50, #fff);

  &:hover {
    background: var(--positive-200, #065f46);
    border-color: var(--positive-200, #065f46);
  }

  &:focus {
    border: 2px solid var(--positive-200, #065f46);
    background: var(--positive-50, #34d399);
    color: var(--positive-200, #065f46);
  }

  &:disabled {
    background: var(--neutral-50, #f9fafb);
    border-color: var(--neutral-50, #f9fafb);
    color: var(--neutral-200, #9ca3af);
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", children, ...rest }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const StyledComponent = {
      primary: PrimaryStyledButton,
      secondary: SecondaryStyledButton,
      negative: NegativeStyledButton,
      positive: PositiveStyledButton,
    };

    const ButtonComponent = StyledComponent[variant];

    return (
      <ButtonComponent ref={ref} {...rest}>
        {children}
      </ButtonComponent>
    );
  },
);
Button.displayName = "Button";
export default Button;
