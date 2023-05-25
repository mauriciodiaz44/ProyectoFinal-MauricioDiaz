import React from "react";
import { CategoriesData } from "../../data/CategoriesData";
import { Link } from "react-router-dom";
import ad from "../../assets/images/ad.png";
import "./Aside.css";

const Aside = () => {
  return (
    <aside className="leftbar">
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
      <div className="leftbar__ad">
        <img src={ad} alt="ad" />
      </div>
    </aside>
  );
};

export default Aside;
