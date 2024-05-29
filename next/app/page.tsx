import useRedirectToRecentChatmate from "@/hooks/messages/useRedirectToRecentChatmate";

const Home = () => {
  const redirectToRecent = useRedirectToRecentChatmate();

  return redirectToRecent();
};

export default Home;
