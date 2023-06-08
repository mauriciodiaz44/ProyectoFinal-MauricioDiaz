import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";
import Error404 from "../../pages/Error404/Error404";
import { fetchProduct } from "../../data/FireStore";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemid } = useParams();

  useEffect(() => {
    fetchProduct(itemid).then((res) => {
      setProductDetail(res);
      setLoading(false);
    });
  }, [itemid]);

  if (loading) {
    return <Loading />;
  }

  if (!productDetail) {
    return <Error404 />;
  }

  return <ItemDetail item={productDetail} />;
};

export default ItemDetailContainer;
