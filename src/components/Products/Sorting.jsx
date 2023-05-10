import React from "react";
import { TiThListOutline, TiThSmallOutline } from "react-icons/ti";

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__left">
        <p>Mostrando 43 resultados</p>
      </div>
      <div className="sorting__right">
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
