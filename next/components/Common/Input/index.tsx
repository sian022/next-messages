import { InputProps } from "@/types/common";
import React from "react";

const Input = ({
  className: customClassName,
  variant = "standard",
  ...props
}: InputProps) => {
  let className = "w-full focus:outline-none p-2 ";

  if (variant === "standard") {
    className +=
      "border border-gray-300 rounded-md focus:ring-primary focus:border-transparent focus:ring-2 ";
  } else if (variant === "transparent") {
    className += "border-none ";
  }

  if (customClassName) {
    className += customClassName;
  }

  return <input className={className} {...props} />;
};

export default Input;
