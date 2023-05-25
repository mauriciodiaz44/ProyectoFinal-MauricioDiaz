import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <section className="breadcrumb__page">
      <div className="container">
        <ul className="breadcrumb__menu">
          {breadCrumbs?.map((breadCrumb, index) => (
            <li className="breadcrumb__item" key={index}>
              {breadCrumbs?.length - 1 === index ? (
                <p className="breadcrumb__text">{breadCrumb.name}</p>
              ) : (
                <>
                  <Link to={breadCrumb.path} className="breadcrumb__link">
                    {breadCrumb.name}
                  </Link>
                  <span className="sep">{"›"}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BreadCrumbs;
