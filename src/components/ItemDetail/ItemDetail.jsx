import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Thumbnail from "../Thumbnail";
import FormatPrice from "../FormatPrice";
import {
  HiOutlineArrowLongLeft,
  HiOutlineBuildingStorefront,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import Ahora12 from "../../assets/images/LogoAhora12.svg";
import Button from "../Button";
import ItemCount from "../ItemCount/ItemCount";
import useCartContext from "../../context/cartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    addToCart(item, count);
  };

  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    { name: `${item.title.substring(0, 35)} ...`, path: `/item/${item.id}` },
  ];

  document.title = `${item.title} - Molecula Componentes`;
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
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
                  <div className="details__price mb-2">
                    <span className="primary">
                      Precio especial <HiOutlineInformationCircle />
                    </span>
                    <h3>
                      <FormatPrice price={item.price} />
                    </h3>
                  </div>
                  <div className="details__price">
                    <span>Precio de lista</span>
                    <h3>
                      <FormatPrice price={item.price * 1.6} />
                    </h3>
                  </div>
                </div>
                <div className="details__icon py-0 pt-3">
                  <img src={Ahora12} alt="Ahora12" width={28} height={28} />
                  <div className="details__desc">
                    <p className="details__text">
                      12 cuotas sin interés de{" "}
                      <span className="details__amount">
                        <FormatPrice price={(item.price * 1.6) / 12} />
                      </span>
                    </p>
                    <Button variant="terciary" text="Ver Cuotas" />
                  </div>
                </div>
                <hr />
                <div className="details__info">
                  <div className="muted">
                    <span>Marca: </span>
                    <Link to="/" className="text-capitalize fw-mbold">
                      {item.seller}
                    </Link>
                  </div>
                  <div className="muted">
                    <span>Categoria: </span>
                    <Link
                      to={`/category/${item.category}`}
                      className="text-capitalize fw-mbold"
                    >
                      {item.category}
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="details__icon">
                  <HiOutlineBuildingStorefront />
                  <div className="details__desc">
                    <p>
                      Retiro
                      <span className="details__amount"> ¡Gratis!</span>
                    </p>
                    <p className="details__text">Arijon 1750 (Rosario)</p>
                  </div>
                </div>
                <div className="details__icon">
                  <HiOutlineTruck />
                  <div className="details__desc">
                    <p>Envíos gratis a todo el país</p>
                    <Button variant="terciary" text="Ver Costo" />
                  </div>
                </div>
                <div className="details__icon">
                  <HiOutlineShieldCheck />
                  <div className="details__desc">
                    <p className="details__text">Garantia por 365 dias</p>
                  </div>
                </div>
                <hr />
                <div className="details__buttons">
                  <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
                <hr />
                <div className="details__info">
                  <div className="details__info-share">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://twitter.com/home"
                    >
                      <RiFacebookCircleFill />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://twitter.com/home"
                    >
                      <RiTwitterFill />
                    </Link>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to="https://twitter.com/home"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetail;
