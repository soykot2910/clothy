import React from "react";
import CollectionComp from "../../components/common/CollectionComp/CollectionComp";
import ShopData from "./Shop.data";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {ShopData.map(({ id, ...otherCollection }) => (
        <CollectionComp key={id} {...otherCollection} />
      ))}
    </div>
  );
};

export default ShopPage;
