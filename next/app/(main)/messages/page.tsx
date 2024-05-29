import useRedirectToRecentChatmate from "@/hooks/messages/useRedirectToRecentChatmate";
import React from "react";

const MessagesPage = () => {
  const redirectToRecent = useRedirectToRecentChatmate();

  return redirectToRecent();
};

export default MessagesPage;
