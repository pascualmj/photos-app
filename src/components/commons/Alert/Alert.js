import React from "react";
import PropTypes from "prop-types";
import "./alert.scss";

import Text from "../Text";

const Alert = ({ className = "", text, type }) => {
  return (
    <div className={`alert ${type} ${className}`}>
      <Text color="absence" size="small">
        {text}
      </Text>
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]),
  className: PropTypes.string,
};

export default Alert;
