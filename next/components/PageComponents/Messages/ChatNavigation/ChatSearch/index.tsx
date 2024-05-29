import Card from "@/components/Common/Card";
import SearchInput from "@/components/Common/SearchInput";
import React from "react";

const ChatSearch = () => {
  return (
    <Card className="flex h-[80px] items-center gap-4 p-4">
      <p className="text-lg font-semibold">Chat</p>
      <SearchInput placeholder="Search chats" />
    </Card>
  );
};

export default ChatSearch;
