"use client";

import Card from "@/components/Common/Card";
import { dummyChatList } from "@/utils/dummy";
import React from "react";
import ChatItem from "./ChatItem";
import { usePathname } from "next/navigation";

const ChatList = () => {
  const pathname = usePathname();

  const chatPartnerId = parseInt(pathname.split("/").pop() || "");

  return (
    <Card className="flex-1 flex flex-col px-0 py-4 divide-y gap-y-0 overflow-auto">
      {dummyChatList.map((convo) => {
        const {
          id,
          name,
          lastMessage,
          lastMessageTime,
          unreadCount,
          sex,
          status,
        } = convo;

        return (
          <ChatItem
            key={id}
            id={id.toString()}
            name={name}
            lastMessage={lastMessage}
            lastMessageTime={lastMessageTime}
            unreadCount={unreadCount}
            sex={sex}
            active={id === chatPartnerId}
            status={status}
          />
        );
      })}
    </Card>
  );
};

export default ChatList;
