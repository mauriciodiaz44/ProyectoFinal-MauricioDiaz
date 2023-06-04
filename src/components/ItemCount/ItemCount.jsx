import React, { useState } from "react";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import "./ItemCount.css";
import Button from "../Button";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleMinus = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handlePlus = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count);
    setCount(initial);
  };

  return (
    <>
      <div className={`itemcount ${stock < 1 ? "disabled" : ""}`}>
        <button
          className="itemcount__minus"
          onClick={handleMinus}
          disabled={count === initial ? true : false}
        >
          <HiOutlineMinusSmall />
        </button>
        <div className="itemcount__quantity">{count}</div>
        <button
          className="itemcount__plus"
          onClick={handlePlus}
          disabled={count === stock ? true : false}
        >
          <HiOutlinePlusSmall />
        </button>
      </div>
      <Button
        variant="primary"
        text="Añadir al carrito"
        className="details__buttons-addcart"
        disabled={stock > 0 ? false : true}
        onClick={handleOnAdd}
      />
    </>
  );
};

export default ItemCount;
