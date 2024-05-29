import Image from "next/image";
import React from "react";

type AvatarProps = {
  src?: string;
  sex?: string;
  width?: number;
  height?: number;
  status?: string;
};

const Avatar = ({
  src: srcProp,
  sex = "Male",
  width,
  height,
  status,
}: AvatarProps) => {
  let src = "";

  if (srcProp) {
    src = srcProp;
  } else {
    if (sex === "Female") {
      src = "/FemaleAvatar1.png";
    } else if (sex === "Male") {
      src = "/MaleAvatar1.png";
    } else {
      src = "/NonBinaryAvatar1.png";
    }
  }

  return (
    <div className="relative">
      <Image
        src={src}
        alt="avatar"
        width={width || 100}
        height={height || 100}
        className="w-12 h-12 rounded-full object-cover"
      />

      {status === "Online" && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
      )}
    </div>
  );
};

export default Avatar;
