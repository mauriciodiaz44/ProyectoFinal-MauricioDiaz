import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container"></div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            {" "}
            © Creado por<span className="fw-bold"> Mauricio Diaz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
