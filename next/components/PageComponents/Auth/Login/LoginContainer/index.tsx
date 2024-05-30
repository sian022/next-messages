import React from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import GoogleSigninButton from "./GoogleSigninButton";
import AuthContainer from "../../AuthContainer";

const LoginContainer = () => {
  return (
    <AuthContainer>
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

      <GoogleSigninButton />
    </AuthContainer>
  );
};

export default LoginContainer;
