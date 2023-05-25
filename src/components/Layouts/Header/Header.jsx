import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import NavBar from "../NavBar/NavBar";
import CartWidget from "../../CartWidget/CartWidget";
import UserWidget from "../../UserWidget";
import { RiMenu3Fill } from "react-icons/ri";
import Offcanvas from "../Offcanvas/Offcanvas";
import { CategoriesData } from "../../../data/CategoriesData";
import { Link, NavLink } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineCpuChip,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";
import "./Header.css";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const handleOpenOffcanvas = () => {
    setIsOffcanvasOpen(true);
  };

  const handleCloseOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-md">
            <div className="header__flex">
              <div className="header__left">
                <button
                  className="button-icon off__canvas-button"
                  onClick={handleOpenOffcanvas}
                >
                  <RiMenu3Fill />
                </button>
                <Link className="navbar-brand" to="/">
                  <img src={Logo} alt="logo" width={150} />
                </Link>
              </div>
              <NavBar />
              <div className="header__right">
                <UserWidget />
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={handleCloseOffcanvas}
        title="Menú"
      >
        <div className="off__canvas-main p-0">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="offcanvas__item">
              <NavLink className="offcanvas__link" to="/">
                <span className="offcanvas__link-icon">
                  <HiOutlineHome />
                </span>{" "}
                Inicio
              </NavLink>
            </li>
            <li className="offcanvas__item">
              <button
                type="button"
                class="offcanvas__link navbar__dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="offcanvas__link-icon">
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
            <li className="offcanvas__item">
              <NavLink className="offcanvas__link" to="/contacto">
                <span className="offcanvas__link-icon">
                  <HiOutlineEnvelope />
                </span>{" "}
                Contacto
              </NavLink>
            </li>
            <li className="offcanvas__item">
              <NavLink className="offcanvas__link" to="/ayuda">
                <span className="offcanvas__link-icon">
                  <HiOutlineQuestionMarkCircle />
                </span>{" "}
                Ayuda
              </NavLink>
            </li>
          </ul>
        </div>
      </Offcanvas>
    </>
  );
};

export default Header;
