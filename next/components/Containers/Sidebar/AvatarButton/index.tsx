"use client";

import Avatar from "@/components/Common/Avatar";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const AvatarButton = () => {
  const session = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="cursor-pointer" onClick={handleLogout}>
      <Avatar src={session.data?.user?.image || ""} />
    </div>
  );
};

export default AvatarButton;
