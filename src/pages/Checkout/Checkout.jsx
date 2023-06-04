import React from "react";
import "./Checkout.css";
import useCartContext from "../../context/cartContext";
import CheckoutEmpty from "./CheckoutEmpty";

const Checkout = () => {
  const { cart } = useCartContext();
  document.title = "Finalizar compra - Molecula Componentes";

  if (cart.length === 0) {
    return <CheckoutEmpty />;
  }

  return <section>Checkout</section>;
};

export default Checkout;
