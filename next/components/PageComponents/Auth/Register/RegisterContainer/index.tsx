import React from "react";
import Link from "next/link";
import AuthContainer from "../../AuthContainer";
import RegisterForm from "./RegisterForm";

const RegisterContainer = () => {
  return (
    <AuthContainer>
      <RegisterForm />

      <div className="flex gap-1">
        <p>Don&apos;t have an account?</p>{" "}
        <Link href="/signup" className="font-semibold hover:underline">
          Sign up
        </Link>
      </div>
    </AuthContainer>
  );
};

export default RegisterContainer;
