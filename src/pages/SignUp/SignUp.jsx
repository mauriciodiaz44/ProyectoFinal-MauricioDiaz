import React from "react";
import Button from "../../components/Button";
import {
  HiOutlineUser,
  HiOutlineIdentification,
  HiOutlineLockClosed,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { Link } from "react-router-dom";
import "../../assets/css/Form.css";

const SignUp = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form__page">
      <div className="container">
        <div className="form__container">
          <div className="form__header">
            <h1 className="form__title">Regístrate</h1>
            <p className="form__subtitle">
              Ingresá tu datos para crear una cuenta.
            </p>
          </div>
          <form className="form__signup" onSubmit={handleSubmit}>
            <div className="form__group-two">
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Nombre"
                  name="firstname"
                  id="name"
                />
                <HiOutlineUser className="form__input-icon" />
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Apellido"
                  name="lastname"
                  id="lastname"
                />
                <HiOutlineIdentification className="form__input-icon" />
              </div>
            </div>
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="off"
              />
              <HiOutlineEnvelope className="form__input-icon" />
            </div>
            <div className="form__group">
              <input
                className="form__input"
                type={PasswordInputType}
                placeholder="Contraseña"
                name="password"
                id="password"
              />
              <HiOutlineLockClosed className="form__input-icon" />
              <span className="form__input-eye">{ToggleIcon}</span>
            </div>
            <div className="form__group mb-0">
              <input
                className="form__input"
                type={PasswordInputType}
                placeholder="Confirmar Contraseña"
                name="password"
                id="password2"
              />
              <HiOutlineLockClosed className="form__input-icon" />
              <span className="form__input-eye">{ToggleIcon}</span>
            </div>
            <div className="form__group-bottom">
              <div className="form__group-remember">
                <input
                  type="checkbox"
                  name="remember-me"
                  className="remember-me me-1"
                  id="remember-me"
                />
                <label className="form__group-rememberme" htmlFor="remember-me">
                  <span className="form__group-rememberme">
                    {" "}
                    Deseo recibir información sobre novedades y ofertas.
                  </span>
                </label>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              text="Registrarse"
              className="form__submit"
            />
            <div className="form__footer">
              <span className="form__footer-text">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="form__group-switch">
                  <Button variant="terciary" text="Iniciá tu sesion" />
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
