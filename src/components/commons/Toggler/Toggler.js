import React from "react";
import PropTypes from "prop-types";
import "./toggler.scss";

const Toggler = ({
  elementOff = null,
  elementOn = null,
  className = "",
  handleClick,
  isActive = false,
}) => {
  return (
    <div className={`toggler ${className}`} onClick={handleClick}>
      {elementOff && <span className="off">{elementOff}</span>}
      <span className={`toggler-element ${isActive ? "active" : ""}`}></span>
      {elementOn && <span className="on">{elementOn}</span>}
    </div>
  );
};

Toggler.propTypes = {
  elementOff: PropTypes.node,
  elementOn: PropTypes.node,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Toggler;
