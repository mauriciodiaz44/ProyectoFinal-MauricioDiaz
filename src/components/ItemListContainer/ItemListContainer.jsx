import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import ItemList from "../ItemList/ItemList";
import Aside from "../Aside/Aside";
import Loading from "../Loading/Loading";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryid } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una solicitud asíncrona para obtener los productos de la categoría
    const fetchProducts = async () => {
      setLoading(true);
      // Simulación de una demora de 2 segundo
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (categoryid === undefined) {
        setProducts(productsData);
        setLoading(false);
      } else {
        // Filtramos los productos por la categoría actual
        const filteredProducts = productsData.filter(
          (product) => product.category === categoryid
        );
        // Guarda los productos filtrados a la array products
        setProducts(filteredProducts);
        setLoading(false);
      }
    };

    fetchProducts();
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
          <div className="products__banner"></div>
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
