import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <button className="button-icon">
          <HiOutlineShoppingBag />
          <span>4</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
