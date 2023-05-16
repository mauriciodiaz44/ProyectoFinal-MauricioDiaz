import React from "react";
import { CategoriesData } from "../data/CategoriesData";
import { Link } from "react-router-dom";
import ad from "../assets/images/ad.png";

const LeftBar = () => {
  return (
    <>
      <div className="categories">
        <h5 className="categories__title">Categorías</h5>
        <ul className="categories__menu">
          {CategoriesData.map((c, index) => (
            <li className="categories__item" key={index}>
              <Link to={c.path} className="categories__link">
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="leftbar">
        <img src={ad} alt="ad" className="leftbar__ad" />
      </div>
    </>
  );
};

export default LeftBar;
