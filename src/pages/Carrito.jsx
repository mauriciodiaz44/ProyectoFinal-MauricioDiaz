import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "../components/Button";

const Carrito = () => {
  return (
    <div className="cart__page">
      <div className="container">
        <div className="cart__container">
          <span className="cart__empty">
            <HiOutlineShoppingCart style={{ fontSize: 180 }} />
          </span>
          <h1 className="cart__title">Tu carrito está vacío.</h1>
          <p className="cart__subtitle">¡Explora nuestro catálogo!</p>
          <a href="/">
            <Button variant="primary" text="VOLVER A LA TIENDA" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
