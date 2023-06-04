import React from "react";
import useCartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";
import FormatPrice from "../FormatPrice";
import Button from "../Button";
import "./Item.css";

const Item = ({ item }) => {
  const { getQuantityById } = useCartContext();
  const quantityPerItem = getQuantityById(item.id);
  return (
    <div className="product">
      {item.featured === true && <div className="product__new">Nuevo</div>}
      {quantityPerItem > 0 && (
        <div className="product__cart">
          <HiOutlineShoppingBag />
          <span className="product__cart-qty">{quantityPerItem}</span>
        </div>
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
              text="Ver mas detalles"
              className="product__content-detail"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
