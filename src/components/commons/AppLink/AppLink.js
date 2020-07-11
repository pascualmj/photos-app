import React from "react";
import PropTypes from "prop-types";
import "./appLink.scss";

const AppLink = ({ text, path, icon = null }) => {
  return (
    <Link className={`link`} path={path}>
      {icon && icon()}
      {text}
    </Link>
  );
};

AppLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.func,
};

export default AppLink;
