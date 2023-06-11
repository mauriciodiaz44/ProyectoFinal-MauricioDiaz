import React from "react";
import FormatPrice from "../../components/FormatPrice";
import { HiOutlineXCircle } from "react-icons/hi2";
import useCartContext from "../../context/cartContext";

const CheckoutOrders = () => {
  const { cart, totalItems, totalPrice, deleteItem } = useCartContext();

  return (
    <div className="order col-lg-4">
      <div className="checkout__order">
        <div className="d-flex align-items-center justify-content-between checkout__title-border">
          <h5>Tu pedido</h5>
          <span className="checkout__items">{totalItems()}</span>
        </div>
        <div className="checkout__orders">
          {cart.map((item, index) => (
            <div className="order-item" key={index}>
              <img src={item.images[0].url} alt={item.title} />
              <div>
                <h5 className="order-item-title">{`${item.title.substring(
                  0,
                  28
                )} ...`}</h5>
                <p className="order-item-price">
                  <span className="muted">
                    <FormatPrice price={item.price} />
                    <span className="fw-mbold">
                      {" "}
                      x {item.qty} - {""}
                    </span>
                  </span>
                  <span className="fw-bold">
                    <FormatPrice price={item.price * item.qty} />
                  </span>
                </p>
              </div>
              <button
                className="order-item-delete"
                onClick={() => deleteItem(item.id)}
              >
                <HiOutlineXCircle />
              </button>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-between checkout__total-border">
          <h5>Total:</h5>
          <h5 className="primary">
            <FormatPrice price={totalPrice()} />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrders;
