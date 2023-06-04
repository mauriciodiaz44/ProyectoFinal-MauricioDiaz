import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import useCartContext from "../../context/cartContext";

const CartWidget = () => {
  const { totalItems } = useCartContext();
  return (
    <div className="cart-widget">
      <Link to="/cart">
        <button className="button-icon">
          <HiOutlineShoppingBag />
          {totalItems && <span>{totalItems()}</span>}
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
