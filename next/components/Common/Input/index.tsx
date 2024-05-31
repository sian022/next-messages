import { InputProps } from "@/types/common";
import cn from "@/utils/cn";
import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className: customClassName, variant = "standard", ...props }, ref) => {
    const baseClasses = "w-full focus:outline-none p-2 ";

    const variantClasses = {
      standard:
        "border-gray-300 rounded-md focus:ring-primary focus:border-transparent focus:ring-2",
      transparent: "border-none",
    };

    const className = cn(baseClasses, variantClasses[variant], customClassName);

    return <input ref={ref} className={className} {...props} />;
  }
);

Input.displayName = "Input";

export default Input;
