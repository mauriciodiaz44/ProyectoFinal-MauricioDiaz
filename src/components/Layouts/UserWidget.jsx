import React from "react";
import { HiOutlineUser, HiArrowRightOnRectangle } from "react-icons/hi2";

const UserWidget = () => {
  return (
    <div className="user-widget dropdown-center">
      <button
        type="button"
        className="button-icon"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        <HiOutlineUser />
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li>
          <a className="dropdown-item" href="/">
            <HiArrowRightOnRectangle /> Registrarse
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <HiArrowRightOnRectangle /> Iniciar sesión
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserWidget;
