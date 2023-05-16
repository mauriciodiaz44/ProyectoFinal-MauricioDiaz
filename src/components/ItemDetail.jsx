import React from "react";
import Thumbnail from "./Thumbnail";
import FormatPrice from "./FormatPrice";
import {
  HiOutlineArrowLongLeft,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import Ahora12 from "../assets/images/LogoAhora12.svg";
import Button from "./Button";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <section className="details__page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Thumbnail item={item} />
          </div>
          <div className="col-12 col-lg-6">
            <div className="details">
              {item.stock > 0 ? (
                <p className="product__content-instock">EN STOCK</p>
              ) : (
                <p className="product__content-outstock">SIN STOCK</p>
              )}
              <div className="d-flex justify-content-between">
                <h1 className="details__title">{item.title}</h1>
                <Link to={`/category/${item.category}`}>
                  <HiOutlineArrowLongLeft style={{ fontSize: 20 }} />
                </Link>
              </div>
              <hr />
              <div className="details__prices">
                <div className="details__price">
                  <span>Precio especial </span>
                  <h3>
                    <FormatPrice price={item.price} />
                  </h3>
                </div>
                <div className="details__price">
                  <span>Precio de lista</span>
                  <h3>
                    <FormatPrice price={item.price * 1.7} />
                  </h3>
                </div>
                <div className="details__prices-icon py-0 pt-3">
                  <img src={Ahora12} alt="Ahora12" width={28} height={28} />
                  <div className="details__prices-desc">
                    <p className="details__prices-text">
                      12 cuotas sin interes de{" "}
                      <span className="details__prices-amount">
                        <FormatPrice price={(item.price * 1.7) / 12} />
                      </span>
                    </p>
                    <Button variant="terciary" text="Ver Cuotas" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="details__prices-icon">
                <HiOutlineBuildingStorefront />
                <div className="details__prices-desc">
                  <p>
                    Retiro
                    <span className="details__prices-amount"> ¡Gratis!</span>
                  </p>
                  <p className="details__prices-text">Arijon 1750 (Rosario)</p>
                </div>
              </div>
              <div className="details__prices-icon">
                <HiOutlineTruck />
                <div className="details__prices-desc">
                  <p>Envíos gratis a todo el país</p>
                  <Button variant="terciary" text="Ver Costo" />
                </div>
              </div>
              <div className="details__prices-icon">
                <HiOutlineShieldCheck />
                <div className="details__prices-desc">
                  <p>Garantia por 365 dias</p>
                </div>
              </div>
              <hr />
              <div className="details__buttons">
                <ItemCount initial={1} />
                <Button
                  variant="primary"
                  text="Añadir al carrito"
                  className="details__buttons-addcart"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
