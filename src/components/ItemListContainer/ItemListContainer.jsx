import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Aside from "../Aside/Aside";
import Loading from "../Loading/Loading";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./ItemListContainer.css";
import { fetchAllProducts, fetchCategory } from "../../data/FireStore";

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
