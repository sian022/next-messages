import Avatar from "@/components/Common/Avatar";
import Bubble from "@/components/Common/Bubble";
import { Message } from "@/types/messages";
import moment from "moment";
import React from "react";

type MessageItemProps = {
  isLastOfSender: boolean;
  senderSex: string;
} & Message;

const MessageItem = ({
  message,
  sender,
  time,
  isLastOfSender,
  senderSex,
}: MessageItemProps) => {
  let className = "flex flex-col gap-2 w-full";
  if (sender === "You") {
    className += " items-end";
  } else {
    className += " items-start";
  }

  const bubbleVariant = sender === "You" ? "right" : "left";
  const bubbleColor = sender === "You" ? "primary" : "gray";
  const showAvatar = sender !== "You" && isLastOfSender;
  const indent = sender !== "You" && !isLastOfSender;

  if (indent) {
    className += " pl-[53px]";
  }

  return (
    <div className={className}>
      <div className="flex items-end gap-1 justify-center">
        {showAvatar && <Avatar sex={senderSex} />}

        <Bubble color={bubbleColor} variant={bubbleVariant}>
          <p title={moment(time).format("LT")}>{message}</p>
        </Bubble>
      </div>
    </div>
  );
};

export default MessageItem;
