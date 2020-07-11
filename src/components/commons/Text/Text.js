import React from "react";
import PropTypes from "prop-types";
import "./text.scss";

const Text = ({
  size = "regular",
  color = "full",
  weight = "regular",
  uppercase = false,
  handleClick = null,
  children,
  className = "",
}) => {
  return (
    <p
      className={`text color-${color} size-${size} weight-${weight} ${className}`}
      {...(uppercase && { style: { textTransform: "uppercase" } })}
      onClick={handleClick}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "full",
    "primary",
    "alternative",
    "secondary",
    "absence",
  ]),
  size: PropTypes.oneOf([
    "smaller",
    "small",
    "regular",
    "big",
    "bigger",
    "subtitle",
    "title",
  ]),
  weight: PropTypes.oneOf(["regular", "bold"]),
  handleClick: PropTypes.func,
  uppercase: PropTypes.bool,
  className: PropTypes.string,
};

export default Text;
