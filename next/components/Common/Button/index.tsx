import { ButtonProps } from "@/types/common";
import React from "react";

const Button = ({
  children,
  color = "primary",
  variant = "filled",
  className: customClassName,
  ...props
}: ButtonProps) => {
  let className = "rounded-md p-1 ";

  if (variant === "filled") {
    if (color === "primary") {
      className += "bg-primary text-white hover:bg-primaryHover ";
    } else if (color === "secondary") {
      className += "bg-secondary text-white hover:bg-secondaryHover ";
    }
    className += "bg-opacity-100 ";
  } else if (variant === "outlined") {
    if (color === "primary") {
      className +=
        "text-primary border-primary hover:bg-primaryHover hover:bg-opacity-5 ";
    } else if (color === "secondary") {
      className +=
        "text-secondary border-secondary hover:bg-secondaryHover hover:bg-opacity-5 ";
    }
    className += "border border-solid bg-opacity-0 ";
  }

  if (customClassName) {
    className += customClassName;
  }

  if (props.disabled) {
    className += "opacity-50";
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
