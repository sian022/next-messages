"use client";

import { signIn, useSession } from "next-auth/react";
import Button from "@/components/Common/Button";
import useMostRecentChatmate from "@/hooks/messages/useMostRecentChatmate";

const GoogleSigninButton = () => {
  const session = useSession();
  const mostRecentChatmateId = useMostRecentChatmate();

  const loginWithGoogle = async () => {
    await signIn("google", {
      redirect: true,
      callbackUrl: `/messages/${mostRecentChatmateId}`,
    });
  };

  return (
    <Button
      type="submit"
      variant="outlined"
      color="primary"
      className="w-full"
      onClick={loginWithGoogle}
      disabled={session.status === "loading"}
    >
      {session.status === "loading" ? "Loading..." : "Sign in with Google"}
    </Button>
  );
};

export default GoogleSigninButton;
