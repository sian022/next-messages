import Avatar from "@/components/Common/Avatar";
import { UserStatusProps } from "@/types/messages";
import React, { FC } from "react";

const UserStatus: FC<UserStatusProps> = ({ name, status, sex }) => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar sex={sex} />

      <div className="flex flex-col">
        <p className="font-semibold">{name}</p>

        <div className="flex items-center gap-1">
          <p>{status}</p>

          <div
            className={`w-2 h-2 rounded-full ml-1 ${
              status === "Online" ? "bg-green-500" : "bg-gray-500"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
