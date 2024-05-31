import { getUserByEmail } from "@/data/user";
import { db } from "@/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const res = await db.user.findMany();
  return Response.json({ users: res });
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const response = RegisterSchema.safeParse(data);

    if (!response.success) {
      const { errors } = response.error;

      return Response.json(
        { message: "Invalid requests", errors },
        { status: 400 }
      );
    }

    const { name, email, password } = response.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 409 });
    }

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // TODO: Send email verification
    return Response.json({ message: "User registered successfully", user });
  } catch (err) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
