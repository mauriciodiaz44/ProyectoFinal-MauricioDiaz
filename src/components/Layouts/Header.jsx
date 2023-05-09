import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { RiMenu3Fill } from "react-icons/ri";
import SearchBar from "./SearchBar";
import Offcanvas from "../Offcanvas";
import { MenuData } from "../../data/MenuData";

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
                <a className="navbar-brand" href="/">
                  <img src={Logo} alt="logo" width={150} />
                </a>
              </div>
              <SearchBar />
              <div className="header__right">
                <UserWidget />
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>
        <NavBar />
      </header>
      <Offcanvas
        isOpen={isOffcanvasOpen}
        onClose={handleCloseOffcanvas}
        title="Menú"
      >
        <div className="off__canvas-main">
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
      </Offcanvas>
    </>
  );
};

export default Header;
