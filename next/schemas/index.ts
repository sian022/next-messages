import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string({ message: "Password is required" }).min(1),
});

export const RegisterSchema = z.object({
  name: z.string({ message: "Name is required" }).min(1),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string({ message: "Password is required" }).min(1),
  confirmPassword: z.string({ message: "Confirm password is required" }).min(1),
});
