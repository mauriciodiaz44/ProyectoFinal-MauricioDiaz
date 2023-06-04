import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Ayuda.css";

const Ayuda = () => {
  document.title = "Ayuda - Molecula Componentes";
  const breadCrumbs = [
    { name: "Inicio", path: "/" },
    { name: "Ayuda", path: "/ayuda" },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="help__page">
        <div className="container">
          <p>Ayuda</p>
        </div>
      </section>
    </>
  );
};

export default Ayuda;
