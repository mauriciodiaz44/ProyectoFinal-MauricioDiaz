import React, { useState } from "react";
import Button from "../../components/Button";
import {
  HiOutlineIdentification,
  HiOutlineEnvelope,
  HiOutlineExclamationCircle,
} from "react-icons/hi2";
import { regName } from "../../hooks/useValid";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import PasswordField from "../../components/PasswordField";
import "../../assets/css/Form.css";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    password2: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log(user);
    try {
      if (user.displayName === "") {
        setError("El nombre es un campo obligatorio.");
      } else if (regName(user.displayName)) {
        setError("El nombre no es valido, debe ingresar nombre y apellido.");
      } else if (user.password2 !== user.password) {
        setError("La contraseña de verificación no coincide.");
      } else {
        await signup(user.email, user.password);
        navigate("/");
      }
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
    }
  };

  document.title = "Registro - Molecula Componentes";

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
          {error && (
            <p className="form__error">
              <HiOutlineExclamationCircle /> {error}
            </p>
          )}
          <form className="form__signup" onSubmit={handleSubmit}>
            <div className="form__group">
              <input
                className="form__input"
                type="text"
                placeholder="Nombre y Apellido"
                name="displayName"
                id="displayName"
                onChange={handleChange}
              />
              <HiOutlineIdentification className="form__input-icon" />
            </div>
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
            <div className="form__group">
              <PasswordField
                placeholder="Contraseña"
                name="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="form__group mb-0">
              <PasswordField
                placeholder="Confirmar Contraseña"
                name="password2"
                id="password2"
                onChange={handleChange}
              />
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
