import React from "react";
import Logo from "../../assets/images/logo.png";
import NavBar, { NavCanvas } from "./NavBar";
import CartWidget from "./CartWidget";
import UserWidget from "./UserWidget";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi2";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-md">
          <div className="header__flex">
            <div className="header__left">
              <button
                className="button-icon mr5 toggler-navcanvas"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
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
              <button className="button-icon">
                <HiOutlineHeart />
              </button>
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
      <NavCanvas />
      <NavBar />
    </header>
  );
};

export default Header;
