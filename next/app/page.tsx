import useMostRecentChatmate from "@/hooks/messages/useMostRecentChatmateId";
import { redirect } from "next/navigation";

const Home = () => {
  const mostRecentChatmateId = useMostRecentChatmate();

  return redirect(`/messages/${mostRecentChatmateId}`);
};

export default Home;
