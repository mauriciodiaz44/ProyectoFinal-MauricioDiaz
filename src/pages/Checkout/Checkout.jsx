import React, { useState } from "react";
import {
  HiOutlineIdentification,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMap,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import useCartContext from "../../context/cartContext";
import CheckoutEmpty from "./CheckoutEmpty";
import CheckoutOrders from "./CheckoutOrders";
import CheckoutComplete from "./CheckoutComplete";
import { sendOrder } from "../../data/FireStore";
import "./Checkout.css";
import "../../assets/css/Form.css";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const Checkout = () => {
  const { cart, totalPrice, removeList } = useCartContext();
  const [error, setError] = useState();

  const [orderId, setOrderId] = useState();
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    email2: "",
    phone: "",
    zipCode: "",
  });

  document.title = "Finalizar compra - Molecula Componentes";

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSendOrder = () => {
    const itemsToBuy = cart.map((item) => ({
      id: item.id,
      quantity: item.qty,
      product: item.title,
      pricePerUnit: item.price,
      total: item.price * item.qty,
    }));

    const order = {
      buyer: {
        name: `${data.name}`,
        phone: `${data.phone}`,
        email: `${data.email}`,
        zipCode: `${data.zipCode}`,
      },
      items: itemsToBuy,
      total: totalPrice(),
    };

    sendOrder(order)
      .then((response) => {
        setOrderId(response);
      })
      .finally(() => {
        setSubmitted(true);
        removeList();
      });
  };

  // Validaciones del formulario
  const regName = (string) => {
    //eslint-disable-next-line
    return /^[a-zA-Z]+ [a-zA-Z]+$/.test(string);
  };

  const regEmail = (string) => {
    //eslint-disable-next-line
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      string
    );
  };

  const regPhoneNumber = (number) => {
    //eslint-disable-next-line
    return /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(number);
  };

  const regZipCode = (number) => {
    //eslint-disable-next-line
    return /(^[a-z]{1}\d{4}[a-z]{3}$|^\d{4}$)/.test(number);
  };

  // Envio de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!regName(data.name)) {
      setError("Por favor, ingrese su nombre completo.");
    } else if (!regPhoneNumber(data.phone)) {
      setError("Por favor, ingrese un numero de telefono valido.");
    } else if (!regEmail(data.email)) {
      setError("Por favor, ingrese un email valido.");
    } else if (data.email2 !== data.email) {
      setError("Los emails ingresados no coinciden.");
    } else if (!regZipCode(data.zipCode)) {
      setError("Por favor, ingrese un codigo postal valido.");
    } else if (
      data.name === "" ||
      data.email === "" ||
      data.email2 === "" ||
      data.phone === "" ||
      data.zipCode === ""
    ) {
      setError("Por favor, rellene todos los campos.");
    } else {
      handleSendOrder();
    }
  };

  // Primer IF : Condicion si ya se compro un producto
  // Segundo IF : Condicion si el carrito se encuentra vacio, no accede al checkout
  if (submitted) {
    return <CheckoutComplete orderId={orderId} />;
  } else if (cart.length === 0) {
    return <CheckoutEmpty />;
  }

  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Carrito", path: "/cart" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="checkout__page pt-0">
        <div className="container">
          <div className="checkout__header">
            <h3 className="checkout__title">Checkout</h3>
            <p>Por favor, rellene todos los datos para finalizar su compra.</p>
          </div>
          <hr className="mb-4" />
          <div className="checkout__main">
            <div className="row">
              <CheckoutOrders />
              <div className="billing col-lg-8">
                <div className="checkout__billing">
                  <h5 className="checkout__title-border">
                    Detalles de facturación
                  </h5>
                  {error && (
                    <p className="form__error">
                      <HiOutlineExclamationCircle /> {error}
                    </p>
                  )}
                  <form className="form__billing" onSubmit={handleSubmit}>
                    <div className="form__group">
                      <input
                        className="form__input"
                        type="text"
                        placeholder="Nombre y apellido"
                        name="name"
                        id="name"
                        onChange={handleChange}
                      />
                      <HiOutlineIdentification className="form__input-icon" />
                    </div>
                    <div className="form__group">
                      <input
                        className="form__input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                      />
                      <HiOutlineEnvelope className="form__input-icon" />
                    </div>
                    <div className="form__group">
                      <input
                        className="form__input"
                        type="email"
                        placeholder="Confirmar Email"
                        name="email2"
                        id="email2"
                        onChange={handleChange}
                      />
                      <HiOutlineEnvelope className="form__input-icon" />
                    </div>
                    <div className="form__group-two">
                      <div className="form__group">
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Telefono"
                          name="phone"
                          id="phone"
                          onChange={handleChange}
                        />
                        <HiOutlinePhone className="form__input-icon" />
                      </div>
                      <div className="form__group">
                        <input
                          className="form__input"
                          type="text"
                          placeholder="Codigo postal"
                          name="zipCode"
                          id="zipCode"
                          onChange={handleChange}
                        />
                        <HiOutlineMap className="form__input-icon" />
                      </div>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        text="Realizar pedido"
                        className="me-2"
                      />
                      <Link to="/cart">
                        <Button variant="secondary" text="Atras" />
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
