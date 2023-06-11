import React from "react";
import {
  HiOutlineUser,
  HiOutlineUserCircle,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import avatar from "../assets/images/avatar-default.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const UserWidget = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  // Dropdown-menu con el usuario ya logeado
  const loggedIn = () => {
    return (
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
        <li>
          <Link className="dropdown-item" to="/">
            <HiOutlineUserCircle /> Mi perfil
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <button className="dropdown-item" to="/login" onClick={handleLogout}>
            <HiOutlineArrowLeftOnRectangle /> Cerrar sesión
          </button>
        </li>
      </ul>
    );
  };

  // Spinner loading para el avatar
  if (loading) {
    return (
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="user-widget dropdown-center">
      <button
        type="button"
        className="button-icon"
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        {user === null ? (
          <HiOutlineUser />
        ) : (
          <img
            src={user.photoURL === null ? avatar : user.photoURL}
            alt="avatar"
            width={28}
            height={28}
            className="rounded-circle"
          />
        )}
      </button>
      {user === null ? (
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li>
            <Link className="dropdown-item" to="/signup">
              <HiOutlineArrowRightOnRectangle /> Registrarse
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              <HiOutlineArrowRightOnRectangle /> Iniciar sesión
            </Link>
          </li>
        </ul>
      ) : (
        loggedIn()
      )}
    </div>
  );
};

export default UserWidget;
