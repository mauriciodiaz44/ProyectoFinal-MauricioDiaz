import React from "react";
import "./Accordion.css";

const Accordion = ({ id, target, title, text }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${target}`}
          aria-expanded="false"
          aria-controls={target}
        >
          {title}
        </button>
      </h2>
      <div
        id={target}
        className="accordion-collapse collapse"
        aria-labelledby={id}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
