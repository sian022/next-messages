import cn from "@/utils/cn";
import React, { PropsWithChildren } from "react";

type BubbleProps = {
  children: React.ReactNode;
  variant?: "left" | "right";
  color?: "primary" | "secondary" | "gray";
};

const Bubble = ({
  children,
  variant = "left",
  color = "secondary",
}: BubbleProps) => {
  const baseClasses = "p-3 m-1 rounded-2xl max-w-xs";

  const colorClasses = {
    primary: "text-white bg-primary",
    secondary: "text-white bg-secondary",
    gray: "text-black bg-gray-200",
  };

  const variantClasses = {
    left: "rounded-bl-none float-left",
    right: "rounded-br-none float-right",
  };

  const className = cn(
    baseClasses,
    colorClasses[color],
    variantClasses[variant]
  );

  return <div className={className}>{children}</div>;
};

export default Bubble;
