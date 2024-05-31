import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GoogleProvider,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        // Use email and password to make your request
        const response =
          await fetch(/* your request here using email and password */);

        if (!response.ok) return null;
        return response.json();
      },
    }),
  ],
} satisfies NextAuthConfig;
