import React from "react";
import CustomeButtonComp from "../CustomeButtonComp/CustomeButtonComp";
import "./cartDropDown.style.scss";

const CartDropDownComp = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<CustomeButtonComp>GO TO CHECKOUT</CustomeButtonComp>
			</div>
		</div>
	);
};

export default CartDropDownComp;
