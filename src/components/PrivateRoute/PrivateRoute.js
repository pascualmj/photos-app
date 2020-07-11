import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import useGlobalStore from "../../hooks/useGlobalStore";

import routes from "../../config/routes";

const PrivateRoute = ({ children, ...otherProps }) => {
  const { isAuthenticated } = useGlobalStore();

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
