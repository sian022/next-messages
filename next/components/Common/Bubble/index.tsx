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
  let bubbleStyle = "p-3 m-1 rounded-2xl max-w-xs";

  if (color === "primary") {
    bubbleStyle += " bg-primary";
  } else if (color === "secondary") {
    bubbleStyle += " bg-secondary";
  } else if (color === "gray") {
    bubbleStyle += " bg-gray-200";
  }

  if (variant === "right") {
    bubbleStyle += " text-white float-right rounded-br-none";
  } else if (variant === "left") {
    bubbleStyle += " text-black float-left rounded-bl-none";
  }

  return <div className={bubbleStyle}>{children}</div>;
};

export default Bubble;
