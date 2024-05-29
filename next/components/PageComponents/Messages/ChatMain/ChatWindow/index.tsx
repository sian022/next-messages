import Card from "@/components/Common/Card";
import { Message } from "@/types/messages";
import React from "react";
import MessageItem from "./MessageItem";
import moment from "moment";

type ChatWindowProps = {
  messages: Array<Message>;
  sex: string;
};

const ChatWindow = ({ messages, sex }: ChatWindowProps) => {
  return (
    <Card className="flex-1 flex flex-col gap-0 p-4">
      {messages.map((message, index) => {
        const isLastOfSender = messages[index + 1]?.sender !== message.sender;

        const showTime =
          messages[index + 1] &&
          moment(message.time).diff(
            moment(messages[index + 1].time),
            "minutes"
          ) < -10;

        return (
          <React.Fragment key={index}>
            {showTime && (
              <div className="flex justify-center text-xs text-gray-500 my-2">
                {moment(message.time).isSame(moment(), "day")
                  ? moment(message.time).format("LT")
                  : moment(message.time).format("ddd LT")}
              </div>
            )}

            <MessageItem
              key={index}
              {...message}
              isLastOfSender={isLastOfSender}
              senderSex={sex}
            />
          </React.Fragment>
        );
      })}
    </Card>
  );
};

export default ChatWindow;
