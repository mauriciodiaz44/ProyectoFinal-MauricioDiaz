import React from "react";
import {
  HiOutlineUser,
  HiArrowLeftOnRectangle,
  HiOutlineUserCircle,
} from "react-icons/hi2";

const UserWidget = () => {
  return (
    <div className="user-widget dropdown-center">
      <button
        className="button-icon"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <HiOutlineUser />
      </button>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li>
          <a className="dropdown-item" href="/">
            <HiOutlineUserCircle className="mb2" /> Mi cuenta
          </a>
        </li>
        <li>
          <hr class="dropdown-divider my-1" />
        </li>
        <li>
          <a className="dropdown-item" href="/">
            <HiArrowLeftOnRectangle className="mb2" /> Cerrar sesion
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserWidget;
