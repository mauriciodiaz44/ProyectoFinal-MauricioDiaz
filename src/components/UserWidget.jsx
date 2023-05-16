import React from "react";
import { HiOutlineUser, HiArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";

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
          <Link className="dropdown-item" to="/signup">
            <HiArrowRightOnRectangle /> Registrarse
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item" to="/login">
            <HiArrowRightOnRectangle /> Iniciar sesión
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserWidget;
