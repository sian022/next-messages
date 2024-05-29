import React, { PropsWithChildren } from "react";

type Card = {
  className?: string;
} & PropsWithChildren;

const Card = ({ className: classNameProps, children }: Card) => {
  let className = "bg-white rounded-md";

  if (classNameProps) {
    className += ` ${classNameProps}`;
  }

  return <div className={className}>{children}</div>;
};

export default Card;
