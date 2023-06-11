import React from "react";
import useCartContext from "../../context/cartContext";
import CheckoutEmpty from "./CheckoutEmpty";
import CheckoutOrders from "./CheckoutOrders";
import CheckoutBilling from "./CheckoutBilling";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useCartContext();

  document.title = "Finalizar compra - Molecula Componentes";

  // Si el carrito esta vacio
  if (cart.length === 0) {
    return <CheckoutEmpty />;
  }

  return (
    <section className="checkout__page">
      <div className="container">
        <div className="checkout__header">
          <h3 className="checkout__title">Checkout</h3>
          <p>Por favor, rellene todos los datos para finalizar su compra.</p>
        </div>
        <hr className="mb-4" />
        <div className="checkout__main">
          <div className="row">
            <CheckoutOrders />
            <CheckoutBilling />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
