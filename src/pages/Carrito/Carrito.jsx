import React from "react";
import CartEmpty from "./CartEmpty";
import useCartContext from "../../context/cartContext";
import FormatPrice from "../../components/FormatPrice";
import {
  HiOutlineXMark,
  HiOutlineTrash,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";
import "./Carrito.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const Carrito = () => {
  const { cart, deleteItem, removeList, totalPrice, totalItems } =
    useCartContext();

  document.title = `Carrito (${totalItems()}) - Molecula Componentes`;

  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Carrito", path: "/cart" },
  ];

  if (cart.length === 0) {
    return <CartEmpty />;
  }
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="cart__page">
        <div className="container">
          <h3 className="mb-3">
            Carrito de compras:{" "}
            <span className="fw-mbold primary">({totalItems()})</span>
          </h3>
          <div className="cart__buttons-top">
            <Link to="/">
              {" "}
              <Button
                variant="secondary"
                icon={<HiOutlineArrowLongLeft />}
                text="Seguir comprando"
              />
            </Link>
            <Button
              variant="terciary"
              icon={<HiOutlineTrash />}
              text="Vaciar carrito"
              onClick={removeList}
            />
          </div>
          <div className="cart__container">
            <table>
              <thead>
                <tr>
                  <th>Productos</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th className="text-center">Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="cart__info">
                        <img
                          src={item.images[0].url}
                          alt={item.title}
                          height={80}
                          width={80}
                        />
                        <div className="ms-2">
                          <Link
                            to={`/item/${item.id}`}
                            className="cart__info-title "
                          >
                            {item.title}
                          </Link>
                          <small>
                            Precio: {""}
                            <span className="primary fw-mbold">
                              <FormatPrice price={item.price} />
                            </span>
                          </small>
                        </div>
                      </div>
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      <p className="cart__subtotal">
                        <FormatPrice price={item.price * item.qty} />
                      </p>
                    </td>
                    <td className="cart__remove text-center">
                      <button
                        className="cart__delete"
                        onClick={() => deleteItem(item.id)}
                      >
                        <HiOutlineXMark />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart__buttons-bottom">
            <h5>
              Total:{" "}
              <span className="primary">
                <FormatPrice price={totalPrice()} />
              </span>
            </h5>
            <Link to="/checkout">
              <Button variant="primary" text="Finalizar compra" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carrito;
