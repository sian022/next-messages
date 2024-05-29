import React, { FC } from "react";
import ChatHeader from "./ChatHeader";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { auth } from "@/auth";

interface ChatMainProps {
  id: string | number;
  name: string;
  status: string;
  sex: string;
  messages: Array<{ message: string; time: string; sender: string }>;
}

const ChatMain: FC<ChatMainProps> = (props) => {
  const { id, name, status, sex, messages } = props;

  return (
    <div className="flex flex-col flex-1 w-full gap-4">
      <ChatHeader name={name} status={status} sex={sex} />
      <ChatWindow messages={messages} sex={sex} />
      <ChatInput />
    </div>
  );
};

export default ChatMain;
