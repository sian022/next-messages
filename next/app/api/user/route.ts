import { db } from "@/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next";

export const GET = async (req: NextApiRequest) => {
  await db.user.findMany();
  return Response.json({ message: "Hello world!" });
};

export const POST = async (req: NextApiRequest) => {
  try {
    const validatedFields = RegisterSchema.safeParse(req.body);

    if (!validatedFields.success) {
      return Response.json({ message: "Invalid fields" });
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json({ message: "User already exists" });
    }

    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // TODO: Send email verification
    return Response.json({ message: "User registered successfully" });
  } catch (err) {
    return Response.json({ message: "Something went wrong" });
  }
};
