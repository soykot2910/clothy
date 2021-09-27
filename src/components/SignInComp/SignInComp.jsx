import React, { useState } from "react";
import CustomeButtonComp from "../CustomeButtonComp/CustomeButtonComp";
import FormInputComp from "../FormInputComp/FormInputComp";
import "./signIn.style.scss";
const SignInComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComp
          name="email"
          value={email}
          type="email"
          label="email"
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInputComp
          name="password"
          value={password}
          type="password"
          label="password"
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <CustomeButtonComp type="submit"> Sign in</CustomeButtonComp>
      </form>
    </div>
  );
};

export default SignInComp;
