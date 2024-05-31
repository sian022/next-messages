import React from "react";
import Link from "next/link";
import AuthContainer from "../../AuthContainer";
import RegisterForm from "./RegisterForm";

const RegisterContainer = () => {
  return (
    <AuthContainer>
      <RegisterForm />

      <div className="flex gap-1">
        <p>Return to</p>{" "}
        <Link href="/login" className="font-semibold hover:underline">
          Login
        </Link>
      </div>
    </AuthContainer>
  );
};

export default RegisterContainer;
