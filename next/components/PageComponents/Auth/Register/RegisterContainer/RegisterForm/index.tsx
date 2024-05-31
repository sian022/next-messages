"use client";

import Button from "@/components/Common/Button";
import FormError from "@/components/Common/FormError";
import Input from "@/components/Common/Input";
import Spinner from "@/components/Common/Spinner";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface RegisterFormProps {}

const RegisterForm = ({}: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { username: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
    console.log(data, " data");
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

      <Input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />

      <FormError message="Something went wrong" />

      <Button
        type="submit"
        variant="filled"
        color="primary"
        // disabled={!isValid}
        disabled
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
