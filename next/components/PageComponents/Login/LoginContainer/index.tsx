"use client";

import React from "react";
import LoginForm from "./LoginForm";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button";
import { signIn } from "@/auth";

const LoginContainer = () => {
  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  return (
    <div className="flex flex-col items-center w-[400px]">
      <Image
        src="/NextMessagesLogoText.png"
        width={400}
        height={400}
        alt="logo"
      />
      <LoginForm />
      <div className="flex gap-1">
        <p>Don&apos;t have an account?</p>{" "}
        <Link href="/signup" className="font-semibold hover:underline">
          Sign up
        </Link>
      </div>

      <div className="flex items-center w-full gap-4 my-2">
        <div className="h-[1px] bg-gray-600 w-full" />
        <p>Or</p>
        <div className="h-[1px] bg-gray-600 w-full" />
      </div>

      <Button
        type="submit"
        variant="outlined"
        color="primary"
        onClick={handleGoogleSignIn}
        className="w-full"
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default LoginContainer;
