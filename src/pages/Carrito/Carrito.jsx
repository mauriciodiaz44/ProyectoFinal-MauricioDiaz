import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./Carrito.css";

const Carrito = () => {
  return (
    <section className="cart__page">
      <div className="container">
        <div className="cart__container">
          <span className="cart__empty">
            <HiOutlineShoppingCart style={{ fontSize: 180 }} />
          </span>
          <h1 className="cart__title">Tu carrito está vacío.</h1>
          <p className="cart__subtitle">¡Explora nuestro catálogo!</p>
          <Link to="/">
            <Button variant="primary" text="VOLVER A LA TIENDA" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
