import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./CartEmpty.css";

const CartEmpty = () => {
  document.title = "Carrito (0) - Molecula Componentes";
  return (
    <div className="cart__empty">
      <span>
        <HiOutlineShoppingCart style={{ fontSize: 180 }} />
      </span>
      <h1 className="cart__title">Tu carrito está vacío.</h1>
      <p className="cart__subtitle">¡Explora nuestro catálogo!</p>
      <Link to="/">
        <Button variant="secondary" text="VOLVER A LA TIENDA" />
      </Link>
    </div>
  );
};

export default CartEmpty;
