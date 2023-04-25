import React from "react";
import SearchBar from "./SearchBar";
import { ItemDropdownContainer, ItemListContainer } from "./ItemListContainer";
import { HiOutlineXMark } from "react-icons/hi2";

const NavBar = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <ItemListContainer page="Inicio" path="/" />
        <ItemDropdownContainer page="Productos" />
        <ItemListContainer page="Armá tu pc" path="/" />
        <ItemListContainer page="Ayuda" path="/" />
      </ul>
      <SearchBar />
    </div>
  );
};

export const NavCanvas = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <SearchBar />
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
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <ItemListContainer page="Inicio" path="/" />
          <ItemDropdownContainer page="Productos" />
          <ItemListContainer page="Armá tu pc" path="/" />
          <ItemListContainer page="Ayuda" path="/" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
