import React from "react";
import CollectionItemComp from "../CollectionItemComp/CollectionItemComp";
import "./collection.style.scss";

const CollectionComp = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">{title.toUpperCase()}</div>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItem }) => (
            <CollectionItemComp key={id} {...otherItem} />
          ))}
      </div>
    </div>
  );
};

export default CollectionComp;
