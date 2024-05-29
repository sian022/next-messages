"use client";

import Avatar from "@/components/Common/Avatar";
import { useRouter } from "next/navigation";
import React from "react";

const AvatarButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="cursor-pointer" onClick={handleLogout}>
      <Avatar />
    </div>
  );
};

export default AvatarButton;
