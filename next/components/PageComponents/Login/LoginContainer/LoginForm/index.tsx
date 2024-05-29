"use client";

import { signIn } from "@/auth";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import useMostRecentChatmate from "@/hooks/messages/useMostRecentChatmateId";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const mostRecentChatmateId = useMostRecentChatmate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | Event) => {
    e.preventDefault();

    router.push(`/messages/${mostRecentChatmateId}`);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 rounded-md py-6"
      onSubmit={handleSubmit}
    >
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      <Button type="submit" variant="filled" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
