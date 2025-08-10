import React from "react";
import styles from "../styles/button.module.css";
import clsx from "clsx";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.base, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
