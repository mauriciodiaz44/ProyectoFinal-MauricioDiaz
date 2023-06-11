import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Accordion from "../../components/Accordion/Accordion";
import { Link } from "react-router-dom";
import "./Ayuda.css";

const Ayuda = () => {
  document.title = "Ayuda - Molecula Componentes";
  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Ayuda", path: "/ayuda" },
  ];

  const faq = [
    {
      title: "Realizar un pedido",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse1",
    },
    {
      title: "Metodos de pago",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse2",
    },
    {
      title: "Depósito - Transferencia bancaria",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse3",
    },
    {
      title: "Envíos",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse4",
    },
    {
      title: "Usuario",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse5",
    },
    {
      title: "Facturación",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio officia aut adipisci libero suscipit maxime, saepe illum autem dolores dolorem? Cum deleniti sed est unde veritatis. Aut, est consequuntur!",
      target: "faqCollapse6",
    },
  ];

  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="help__page">
        <div className="container">
          <h3>Preguntas Frecuentes</h3>
          <p className="mb-3">
            Aqui puedes encontrar todas las preguntas frecuentes para cualquier
            duda.
          </p>
          <div
            className="help__accordions accordion accordion-flush mb-3"
            id="accordionFlushExample"
          >
            {faq.map((item, index) => (
              <Accordion
                title={item.title}
                text={item.text}
                id={index}
                target={item.target}
                key={index}
              />
            ))}
          </div>
          <div className="help__contact">
            <h5>Quieres hacer otra consulta?</h5>
            <p>
              Por favor, envianos tu duda <Link to="/contacto">aqui</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ayuda;
