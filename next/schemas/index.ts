import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string({ message: "Password is required" }).min(1),
});

export const RegisterSchema = z
  .object({
    name: z
      .string({ message: "Name is required" })
      .min(1, { message: "Name cannot be empty" }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z
      .string({ message: "Password is required" })
      .min(1, { message: "Password cannot be empty" }),
    confirmPassword: z
      .string({ message: "Confirm password is required" })
      .min(1, { message: "Confirm password cannot be empty" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // This will show the error message at the confirmPassword field
  });
