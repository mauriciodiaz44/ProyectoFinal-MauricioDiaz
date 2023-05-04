import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";
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

export const NavCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-white">Menu</h5>
        <button
          type="button"
          className="button-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <HiOutlineXMark />
        </button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1">
          {MenuData.map((p, index) => {
            return (
              <li className="offcanvas__item" key={index}>
                <a className="offcanvas__link" href={p.path}>
                  <span className="offcanvas__link-icon">{p.icon}</span>{" "}
                  {p.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
