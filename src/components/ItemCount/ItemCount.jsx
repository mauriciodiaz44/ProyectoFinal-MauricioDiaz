import React from "react";
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from "react-icons/hi2";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  return (
    <div className="itemcount">
      <button className="itemcount__minus">
        <HiOutlineMinusSmall />
      </button>
      <div className="itemcount__quantity">{initial}</div>
      <button className="itemcount__plus">
        <HiOutlinePlusSmall />
      </button>
    </div>
  );
};

export default ItemCount;
