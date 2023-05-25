import React from "react";
import { CategoriesData } from "../../../data/CategoriesData";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar__section">
      <div className="navbar__flex">
        <ul className="navbar__nav">
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/">
              <span className="navbar__link-icon">
                <HiOutlineHome />
              </span>{" "}
              Inicio
            </NavLink>
          </li>
          <li className="navbar__item">
            <button
              type="button"
              class="navbar__link navbar__dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="navbar__link-icon">
                <HiOutlineCpuChip />
              </span>{" "}
              Productos <HiOutlineChevronDown className="dropdown-arrow" />
            </button>
            <ul class="dropdown-menu">
              <li>
                <Link to="/" className="dropdown-item">
                  Todos los productos
                </Link>
              </li>
              <hr className="dropdown-divider" />
              {CategoriesData.map((c, index) => (
                <li key={index}>
                  <Link to={c.path} className="dropdown-item">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/contacto">
              <span className="navbar__link-icon">
                <HiOutlineEnvelope />
              </span>{" "}
              Contacto
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/ayuda">
              <span className="navbar__link-icon">
                <HiOutlineQuestionMarkCircle />
              </span>{" "}
              Ayuda
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
