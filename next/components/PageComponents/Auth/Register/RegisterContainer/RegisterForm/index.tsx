"use client";

import Button from "@/components/Common/Button";
import FormError from "@/components/Common/FormError";
import Input from "@/components/Common/Input";
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
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-4 rounded-md py-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="text" placeholder="Name" {...register("name")} />

      <Input
        type="text"
        placeholder="Email"
        {...register("email")}
        autoComplete="email"
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
        disabled={!isValid}
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
