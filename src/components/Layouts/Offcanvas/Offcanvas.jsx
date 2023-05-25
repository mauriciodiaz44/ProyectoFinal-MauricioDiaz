import React from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import "./Offcanvas.css";

const Offcanvas = ({ isOpen, onClose, title, children }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className={`off__canvas ${isOpen ? "open" : ""}`}>
      <div className="off__canvas-overlay" onClick={handleClose}></div>
      <div className="off__canvas-content">
        <div className="off__canvas-header">
          <h5 className="off__canvas-title">{title}</h5>
          <button className="button-icon" onClick={handleClose}>
            <HiOutlineXMark />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Offcanvas;
