import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="py-4">
      <div className="container">
        <Button variant="primary" className="me-3" text="Boton Primario" />
        <Button variant="secondary" className="me-3" text="Boton Secundario" />
        <Button variant="terciary" className="me-3" text="Boton Terciario" />
      </div>
    </div>
  );
};

export default Home;
