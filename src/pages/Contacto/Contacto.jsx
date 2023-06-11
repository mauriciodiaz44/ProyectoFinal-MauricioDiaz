import React, { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineIdentification,
  HiOutlineEnvelope,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import Button from "../../components/Button";
import { sendContact } from "../../data/FireStore";
import { regEmail } from "../../hooks/useValid";
import "./Contacto.css";

const Contacto = () => {
  document.title = "Contacto - Molecula Componentes";
  const [id, setId] = useState();
  const [sucess, setSucess] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const handleSendContact = () => {
    const contact = {
      name: `${data.name}`,
      lastName: `${data.lastName}`,
      email: `${data.email}`,
      message: `${data.message}`,
    };

    sendContact(contact).then((response) => {
      setId(response);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSucess("");
    if (
      data.name === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.message === ""
    ) {
      setError("Por favor, rellene todos los campos.");
    } else if (data.name < 3) {
      setError("Por favor, ingrese un nombre valido.");
    } else if (data.lastName < 3) {
      setError("Por favor, ingrese un apellido valido.");
    } else if (!regEmail(data.email)) {
      setError("Por favor, ingrese un email valido.");
    } else {
      handleSendContact();
      setSucess("Consulta enviada exitosamente.");
    }
  };

  return (
    <section className="contact__page">
      <div className="container">
        <div className="contact__container">
          <h1 className="contact__title">Contacto</h1>
          {error && (
            <p className="form__error">
              <HiOutlineExclamationCircle /> {error}
            </p>
          )}
          {sucess && (
            <p className="form__error form__sucess">
              <HiOutlineCheckCircle /> {sucess} {id}
            </p>
          )}
          <form className="form__contact" onSubmit={handleSubmit}>
            <div className="form__group-two">
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
                <HiOutlineUser className="form__input-icon" />
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Apellido"
                  name="lastName"
                  id="lastName"
                  onChange={handleChange}
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
                onChange={handleChange}
              />
              <HiOutlineEnvelope className="form__input-icon" />
            </div>
            <div className="form__group">
              <textarea
                className="form__input form__textarea"
                id="menssage"
                name="message"
                placeholder="Mensaje"
                rows="3"
                maxLength={300}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="primary"
                text="Enviar"
                className="px-4 text-center"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
