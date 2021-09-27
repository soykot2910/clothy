import React from "react";
import "./customeButton.style.scss";

const CustomeButtonComp = ({ children, ...other }) => {
  return (
    <button className="custom-button" {...other}>
      {children}
    </button>
  );
};

export default CustomeButtonComp;
