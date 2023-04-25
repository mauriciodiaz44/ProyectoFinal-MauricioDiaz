import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <button className="button-icon">
        <HiOutlineShoppingBag />
        <span>4</span>
      </button>
    </div>
  );
};

export default CartWidget;
