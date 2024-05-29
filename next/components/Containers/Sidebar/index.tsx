import Image from "next/image";
import React from "react";
import AvatarButton from "./AvatarButton";

const Sidebar = () => {
  return (
    <div className="h-full w-[60px] rounded-lg bg-secondary flex flex-col items-center justify-between py-5 px-2">
      <Image src="/NextMessagesLogo.png" alt="logo" width={40} height={40} />

      <AvatarButton />
    </div>
  );
};

export default Sidebar;
