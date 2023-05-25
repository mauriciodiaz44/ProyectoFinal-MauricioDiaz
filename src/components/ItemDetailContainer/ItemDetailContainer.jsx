import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import Error404 from "../../pages/Error404/Error404";

const ItemDetailContainer = () => {
  const { itemid } = useParams();

  const fetchProductDetails = useCallback(async () => {
    // Simulación de una demora de 2 segundo
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      // Buscamos el detalle del producto por ID
      const productDetail = productsData.find(
        (product) => product.id === Number(itemid)
      );

      // Condicional por si no encuentra el producto
      if (!productDetail) {
        throw new Error("No se encontró el producto");
      }

      return productDetail;
    } catch (error) {
      throw new Error("No se encontró el producto");
    }
  }, [itemid]);

  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const detail = await fetchProductDetails();
        setProductDetail(detail);
      } catch (error) {
        console.log(error);
        setProductDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [fetchProductDetails]);

  if (loading) {
    return <Loading />;
  }

  if (!productDetail) {
    return <Error404 />;
  }

  return <ItemDetail item={productDetail} />;
};

export default ItemDetailContainer;
