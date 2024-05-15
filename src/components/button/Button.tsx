import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import classes from "./Button.module.css";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  loading?: boolean;
  disabled?: boolean;
  classNames?: string;
  variant?: "primary" | "secondary" | "negative" | "positive";
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loading = false,
      disabled = false,
      classNames = "",
      variant = "primary",
      children,
      ...rest
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const buttonClasses = {
      primary: "primary-button",
      secondary: "secondary-button",
      negative: "negative-button",
      positive: "positive-button",
    };

    const className = `${classes.button} ${classes[buttonClasses[variant]] || classes[buttonClasses.primary]} ${classNames} ${disabled ? "disabled" : ""} `;

    return (
      <button
        ref={ref}
        className={className}
        disabled={loading || disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
export default Button;
