import React from "react";
import { HiCheckCircle } from "react-icons/hi2";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const CheckoutComplete = ({ orderId }) => {
  return (
    <section className="checkout__page text-center">
      <div className="container">
        <HiCheckCircle style={{ fontSize: 100, color: "#5fd068" }} />
        <h3 className="checkout__title">Compra realizada</h3>
        <p>Su compra se ha realizado con exito.</p>
        <p className="mb-2">
          El numero de pedido es: <strong>{orderId}</strong>
        </p>
        <Link to="/">
          <Button variant="secondary" text="Volver a la tienda" />
        </Link>
      </div>
    </section>
  );
};

export default CheckoutComplete;
