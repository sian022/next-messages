import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary";
  variant?: "filled" | "outlined" | "transparent";
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "standard" | "transparent";
};
