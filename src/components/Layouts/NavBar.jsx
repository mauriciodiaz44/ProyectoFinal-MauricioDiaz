import React from "react";
import { MenuData } from "../../data/MenuData";

const NavBar = () => {
  return (
    <div className="navbar__section">
      <div className="container">
        <div className="navbar__flex">
          <ul className="navbar__nav">
            {MenuData.map((p, index) => {
              return (
                <li className="navbar__item" key={index}>
                  <a className="navbar__link" href={p.path}>
                    <span className="navbar__link-icon">{p.icon}</span>{" "}
                    {p.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
