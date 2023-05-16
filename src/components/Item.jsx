import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";
import FormatPrice from "./FormatPrice";
import Button from "./Button";

const Item = ({ item }) => {
  return (
    <div className="product">
      {item.featured === true ? (
        <div className="product__new">Nuevo</div>
      ) : (
        <></>
      )}
      <div className="product__image">
        <Link to={`/item/${item.id}`} className="product__image-link">
          <img src={item.images[0].url} alt={item.title} />
        </Link>
      </div>
      <div className="product__content">
        <h5 className="product__content-title">{item.title}</h5>
        <div className="product__content-price">
          {item.stock > 0 ? (
            <span className="product__content-instock">
              <HiOutlineCheckCircle /> EN STOCK
            </span>
          ) : (
            <span className="product__content-outstock">
              <HiOutlineXCircle /> SIN STOCK
            </span>
          )}
          <span className="product__content-amount">
            <FormatPrice price={item.price} />
          </span>
        </div>
        <div className="product__content-buttons">
          <Link to={`/item/${item.id}`}>
            <Button
              variant="secondary"
              text="Ver detalles"
              className="product__content-detail"
            />
          </Link>
          <Button
            variant="primary"
            text="Añadir al carrito"
            className="product__content-addcart"
            disabled={item.stock > 0 ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
