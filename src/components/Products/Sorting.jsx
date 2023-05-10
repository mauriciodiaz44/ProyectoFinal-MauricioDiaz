import React from "react";
import { TiThListOutline, TiThSmallOutline } from "react-icons/ti";

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__left"></div>
      <div className="sorting__right">
        <p>Mostrando 43 resultados</p>
        <div className="sorting__views">
          <button className="button-icon button-view">
            <TiThListOutline />
          </button>
          <button className="button-icon button-view">
            <TiThSmallOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
