import useRedirectToRecentChatmate from "@/hooks/messages/useRedirectToRecentChatmate";

const MessagesPage = () => {
  const redirectToRecent = useRedirectToRecentChatmate();

  return redirectToRecent();
};

export default MessagesPage;
