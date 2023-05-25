import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error__page">
      <div className="container">
        <h1>404</h1>
        <h4>Página no encontrada</h4>
        <p>Lo sentimos, no podemos encontrar la página que solicitaste.</p>
        <Link to="/">
          <Button variant="secondary" text="Volver atras" />
        </Link>
      </div>
    </div>
  );
};

export default Error404;
