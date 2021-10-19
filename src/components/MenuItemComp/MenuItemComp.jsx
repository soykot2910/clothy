import React from "react";
import { useHistory } from "react-router";
import "./menuItem.style.scss";

const MenuItemComp = ({ title, imageUrl, size }) => {
  const history = useHistory();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`/${title}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItemComp;
