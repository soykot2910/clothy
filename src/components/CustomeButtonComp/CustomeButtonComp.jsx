import React from "react";
import "./customeButton.style.scss";

const CustomeButtonComp = ({ children, isGoogleSignIn, ...other }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...other}
    >
      {children}
    </button>
  );
};

export default CustomeButtonComp;
