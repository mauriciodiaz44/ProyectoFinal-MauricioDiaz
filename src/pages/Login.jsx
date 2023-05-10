import React from "react";
import { HiOutlineLockClosed, HiOutlineEnvelope } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import usePasswordToggle from "../hooks/usePasswordToggle";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div className="form__page">
      <div className="container">
        <div className="form__container">
          <div className="form__header">
            <h1 className="form__title">Iniciar sesión</h1>
            <p className="form__subtitle">
              Ingresá tu datos para iniciar sesión.
            </p>
          </div>
          <form className="form__signin">
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
            <div className="form__group mb-0">
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
            <div className="form__group-bottom">
              <div className="form__group-remember">
                <input
                  type="checkbox"
                  name="remember-me"
                  className="remember-me me-2"
                  id="remember-me"
                />
                <label className="form__group-rememberme" htmlFor="remember-me">
                  <span> Recordarme</span>
                </label>
              </div>
              <div className="form__group-forgot">
                <Link to="/" className="form__group-forgotPass">
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              variant="primary"
              text="Iniciar sesión"
              className="form__submit"
            />
            <div className="form__footer">
              <span className="form__footer-text">
                ¿No tienes una cuenta?{" "}
                <Link to="/signup" className="form__group-switch">
                  <Button variant="terciary" text="Regístrate" />
                </Link>
              </span>
            </div>
          </form>
          <div className="text-divider"></div>
          <div className="form__media">
            <a href="/" className="form__media-link">
              Iniciar sesión con Google
              <span className="form__media-social">
                <FcGoogle />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
