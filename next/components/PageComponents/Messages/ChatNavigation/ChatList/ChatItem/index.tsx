"use client";

import Avatar from "@/components/Common/Avatar";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

interface ChatItemProps {
  id: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  sex: string;
  active: boolean;
  status: string;
}

const ChatItem: FC<ChatItemProps> = (props) => {
  const {
    id,
    name,
    lastMessage,
    lastMessageTime,
    unreadCount,
    sex,
    active,
    status,
  } = props;

  const router = useRouter();

  const handleSelectChat = () => {
    router.push(`/messages/${id}`);
  };

  let chatItemClassName = "w-full flex gap-4 cursor-pointer  py-3 px-4";

  if (active) {
    chatItemClassName += " bg-neutralActive";
  } else {
    chatItemClassName += " hover:bg-neutralHover";
  }

  return (
    <div className={chatItemClassName} onClick={handleSelectChat}>
      <Avatar sex={sex} status={status} />

      <div className="flex justify-between flex-1">
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{lastMessage}</p>
        </div>

        <div className="flex flex-col justify-between items-end">
          <p className="text-gray-500 text-sm">{lastMessageTime}</p>
          {unreadCount > 0 && (
            <div className="bg-primary rounded-full min-w-5 min-h-5 text-white flex justify-center items-center">
              <p className="text-sm">{unreadCount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
