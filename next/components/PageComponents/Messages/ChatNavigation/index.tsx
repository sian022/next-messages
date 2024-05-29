import React from "react";
import ChatSearch from "./ChatSearch";
import ChatList from "./ChatList";

const ChatNavigation = () => {
  return (
    <div className="flex flex-col gap-4 w-[360px]">
      <ChatSearch />
      <ChatList />
    </div>
  );
};

export default ChatNavigation;
