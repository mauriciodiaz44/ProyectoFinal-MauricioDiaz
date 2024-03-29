import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Aside from "../Aside/Aside";
import Loading from "../Loading/Loading";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { fetchAllProducts, fetchCategory } from "../../data/FireStore";
import Error404 from "../../pages/Error404/Error404";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryid === undefined) {
      document.title = "Molecula Componentes";

      fetchAllProducts().then((res) => {
        setProducts(res);
        setLoading(false);
      });
    } else {
      document.title = `${
        categoryid[0].toUpperCase() + categoryid.substring(1)
      } - Molecula Componentes`;

      fetchCategory(categoryid).then((res) => {
        setProducts(res);
        setLoading(false);
      });
    }
  }, [categoryid]);

  if (loading) {
    return <Loading />;
  }

  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    categoryid === undefined
      ? ""
      : { name: categoryid, path: `/category/${categoryid}` },
  ];

  // Si no hay ningun producto significa que no existe tal categoria
  if (products.length === 0) {
    return <Error404 />;
  }

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="products__page">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Aside />
            </div>
            <div className="col-12 col-lg-9">
              <ItemList data={products} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemListContainer;
