"use client";

import Button from "@/components/Common/Button";
import Card from "@/components/Common/Card";
import Input from "@/components/Common/Input";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ChatInput = () => {
  return (
    <div className="flex gap-4">
      <Card className="flex flex-1 px-2 py-2">
        <Input
          variant="transparent"
          placeholder="Write messages..."
          className="p-0"
        />
      </Card>

      <Button className="w-[60px] h-[60px]" color="primary">
        <FontAwesomeIcon icon={faPaperPlane} className="size-5" />
      </Button>
    </div>
  );
};

export default ChatInput;
