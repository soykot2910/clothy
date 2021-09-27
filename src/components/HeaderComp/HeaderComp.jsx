import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

const HeaderComp = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        Clothy
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default HeaderComp;
