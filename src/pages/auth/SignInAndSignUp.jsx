import React from "react";
import SignInComp from "../../components/SignInComp/SignInComp";
import SignUpComp from "../../components/SignUpComp/SignUpComp";
import "./singInSignUp.style.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComp />
      <SignUpComp />
    </div>
  );
};

export default SignInAndSignUp;
