import cn from "@/utils/cn";
import React, { PropsWithChildren } from "react";

type Card = {
  className?: string;
} & PropsWithChildren;

const Card = ({ className: customClassName, children }: Card) => {
  const baseClasses = "bg-white rounded-md";

  const className = cn(baseClasses, customClassName);

  return <div className={className}>{children}</div>;
};

export default Card;
