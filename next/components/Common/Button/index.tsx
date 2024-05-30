import { ButtonProps } from "@/types/common";
import React from "react";
import cn from "@/utils/cn";

const Button = ({
  children,
  color = "primary",
  variant = "filled",
  className: customClassName,
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses = "rounded-md p-1";
  const colorClasses = {
    primary: cn(
      "text-white",
      { "bg-primary": variant === "filled" },
      {
        "text-primary border-primary hover:bg-primaryHover hover:bg-opacity-5":
          variant === "outlined",
      },
      { "hover:bg-primaryHover": !disabled }
    ),
    secondary: cn(
      "text-white",
      { "bg-secondary": variant === "filled" },
      {
        "text-secondary border-secondary hover:bg-secondaryHover hover:bg-opacity-5":
          variant === "outlined",
      },
      { "hover:bg-secondaryHover": !disabled }
    ),
  };

  const variantClasses = {
    filled: "bg-opacity-100",
    outlined: "border border-solid bg-opacity-0",
    transparent: "",
  };
  const disabledClasses = "opacity-50";

  const className = cn(
    baseClasses,
    customClassName,
    colorClasses[color],
    variantClasses[variant],
    { [disabledClasses]: disabled }
  );

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
