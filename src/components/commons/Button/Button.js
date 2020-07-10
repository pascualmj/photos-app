import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({
  text,
  type = "button",
  handleClick = null,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
