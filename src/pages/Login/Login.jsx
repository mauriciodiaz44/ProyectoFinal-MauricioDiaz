import React, { useState } from "react";
import {
  HiOutlineLockClosed,
  HiOutlineEnvelope,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../context/authContext";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/Form.css";

const Login = () => {
  document.title = "Login - Molecula Componentes";
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("El email ingresado no es valido.");
      }
      if (error.code === "auth/missing-email") {
        setError("El email es un campo obligatorio.");
      }
      if (error.code === "auth/missing-password") {
        setError("La contraseña es un campo obligatorio.");
      }
      if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("El email ingresado ya ha sido registrado.");
      }
      if (error.code === "auth/user-not-found") {
        setError("El email ingresado no existe.");
      }
      if (error.code === "auth/wrong-password") {
        setError("El email / contraseña ingresado es incorrecta.");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error);
    }
  };

  document.title = "Login - Molecula Componentes";
  return (
    <section className="form__page">
      <div className="container">
        <div className="form__container">
          <div className="form__header">
            <h1 className="form__title">Iniciar sesión</h1>
            <p className="form__subtitle">
              Ingresá tu datos para iniciar sesión.
            </p>
          </div>
          {error && (
            <p className="form__error">
              <HiOutlineExclamationCircle /> {error}
            </p>
          )}
          <form className="form__signin" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                className="form__input"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={handleChange}
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
                onChange={handleChange}
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
            <button className="form__media-link" onClick={handleGoogleSignIn}>
              Iniciar sesión con Google
              <span className="form__media-social">
                <FcGoogle />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
