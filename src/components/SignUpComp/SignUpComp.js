import React from "react";

import FormInputComp from "../FormInputComp/FormInputComp";
import CustomeButtonComp from "../CustomeButtonComp/CustomeButtonComp";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./signup.style.scss";

class SignUpComp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInputComp
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInputComp
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInputComp
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInputComp
            type="password"
            name="password"
            value={confirmPassword}
            onChange={this.handleChange}
            label="ConfirmPassword"
            required
          />
          <CustomeButtonComp type="submit">SIGN IN</CustomeButtonComp>
        </form>
      </div>
    );
  }
}
export default SignUpComp;
