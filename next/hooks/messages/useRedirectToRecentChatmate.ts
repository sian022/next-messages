// hooks/useRedirectToRecentChatmate.ts

import { redirect } from "next/navigation";
import useMostRecentChatmate from "./useMostRecentChatmate";

const useRedirectToRecentChatmate = () => {
  const mostRecentChatmateId = useMostRecentChatmate();

  const redirectToRecentChatMate = () => {
    redirect(`/messages/${mostRecentChatmateId}`);
  };

  return redirectToRecentChatMate;
};

export default useRedirectToRecentChatmate;
