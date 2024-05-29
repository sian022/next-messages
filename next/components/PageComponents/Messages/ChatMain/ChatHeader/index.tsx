import Card from "@/components/Common/Card";
import React, { FC } from "react";
import UserStatus from "./UserStatus";
import { UserStatusProps } from "@/types/messages";
import SearchAndActions from "./SearchAndActions";

const ChatHeader: FC<UserStatusProps> = ({ sex, name, status }) => {
  return (
    <Card className="h-[80px] flex justify-between p-4 items-center">
      <UserStatus sex={sex} name={name} status={status} />

      <SearchAndActions />
    </Card>
  );
};

export default ChatHeader;
