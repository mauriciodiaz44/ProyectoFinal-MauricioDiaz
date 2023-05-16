import React, { useState } from "react";
import { TiThListOutline, TiThSmallOutline } from "react-icons/ti";
import Item from "./Item";

const ItemList = ({ data }) => {
  const [isViewList, setViewList] = useState(false);

  const handleViewGrid = () => {
    setViewList(false);
  };
  const handleViewList = () => {
    setViewList(true);
  };

  return (
    <div className="products__rightbar">
      <div className="sorting">
        <div className="sorting__left">
          <p className="ms-2">{`Mostrando ${data.length} resultados`}</p>
        </div>
        <div className="sorting__right">
          <div className="sorting__views">
            <button
              className={`button-icon button-view 
              ${isViewList ? "active" : ""}`}
              onClick={handleViewList}
            >
              <TiThListOutline />
            </button>
            <button
              className={`button-icon button-view 
              ${isViewList ? "" : "active"}`}
              onClick={handleViewGrid}
            >
              <TiThSmallOutline />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`products__items ${isViewList ? "view-list" : "view-grid"}`}
      >
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
