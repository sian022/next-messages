"use client";

import { signIn } from "@/auth";
import Button from "@/components/Common/Button";
import useMostRecentChatmate from "@/hooks/messages/useMostRecentChatmate";

const GoogleSigninButton = () => {
  const mostRecentChatmateId = useMostRecentChatmate();

  const loginWithGoogle = async () => {
    await signIn("google", { redirectTo: `/messages/${mostRecentChatmateId}` });
  };

  return (
    <Button
      type="submit"
      variant="outlined"
      color="primary"
      className="w-full"
      onClick={loginWithGoogle}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSigninButton;
