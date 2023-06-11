import React from "react";
import { HiCheckCircle } from "react-icons/hi2";

const CheckoutComplete = ({ orderId }) => {
  return (
    <section className="checkout__page text-center">
      <div className="container">
        <HiCheckCircle style={{ fontSize: 100, color: "#5fd068" }} />
        <h3 className="checkout__title">Compra realizada</h3>
        <p>Su compra se ha realizado con exito.</p>
        <p>
          El numero de pedido es: <strong>{orderId}</strong>
        </p>
      </div>
    </section>
  );
};

export default CheckoutComplete;
