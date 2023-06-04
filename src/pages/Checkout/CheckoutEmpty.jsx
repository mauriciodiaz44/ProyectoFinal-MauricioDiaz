import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "../Carrito/CartEmpty.css";

const CheckoutEmpty = () => {
  return (
    <div className="cart__empty">
      <h1 className="cart__title mb-2">Tu carrito está vacío.</h1>
      <p className="mb-2">
        Finalizar compra no está disponible mientras tu carrito esté vacío.
      </p>
      <Link to="/">
        <Button variant="secondary" text="VOLVER A LA TIENDA" />
      </Link>
    </div>
  );
};

export default CheckoutEmpty;
