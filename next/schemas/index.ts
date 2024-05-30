import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string({ message: "Username is required" }).min(1),
  password: z.string({ message: "Password is required" }).min(1),
});
