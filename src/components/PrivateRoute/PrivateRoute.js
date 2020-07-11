import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import routes from "../../config/routes";

const isAuthenticated = false;

const PrivateRoute = ({ children, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={() =>
        isAuthenticated ? children : <Redirect to={routes.ROUTE_LOGIN} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  otherProps: PropTypes.object,
};

export default PrivateRoute;
