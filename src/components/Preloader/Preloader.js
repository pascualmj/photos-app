import React from "react";
import PropTypes from "prop-types";
import "./preloader.scss";

import Text from "../commons/Text";

const Preloader = ({ className = "", text = "Loading" }) => {
  return (
    <section className={`preloader ${className}`}>
      <div className="lds-dual-ring"></div>
      <Text color="alternative" size="small" weight="bold">
        {text}
      </Text>
    </section>
  );
};

Preloader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Preloader;
