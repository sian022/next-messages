import { InputProps } from "@/types/common";
import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className: customClassName, variant = "standard", ...props }, ref) => {
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

    return <input ref={ref} className={className} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
