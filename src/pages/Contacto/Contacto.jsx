import React from "react";
import {
  HiOutlineUser,
  HiOutlineIdentification,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import Button from "../../components/Button";
import "./Contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact__page">
      <div className="container">
        <div className="contact__container">
          <h1 className="contact__title">Contacto</h1>
          <form className="form__contact" onSubmit={handleSubmit}>
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
              <textarea
                className="form__input form__textarea"
                id="mensaje"
                placeholder="Mensaje"
                rows="3"
                maxLength={300}
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
