"use client";
import Button from "@/components/Common/Button";
import Input from "@/components/Common/Input";
import useMostRecentChatmate from "@/hooks/messages/useMostRecentChatmate";
import { useRouter } from "next/navigation";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormError from "@/components/Common/FormError";

const LoginForm = () => {
  const router = useRouter();
  const mostRecentChatmateId = useMostRecentChatmate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data, " data");
    router.push(`/messages/${mostRecentChatmateId}`);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 rounded-md py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        placeholder="Username"
        {...register("username")}
        autoComplete="username"
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password")}
        autoComplete="current-password"
      />

      <FormError message="Something went wrong" />

      <Button
        type="submit"
        variant="filled"
        color="primary"
        disabled={!isValid}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
