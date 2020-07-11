import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import Details from "../views/Details";
import PrivateRoute from "../components/PrivateRoute";

import routes from "../config/routes";

const Routes = () => {
  return (
    <Switch>
      <Route path={routes.ROUTE_LOGIN} component={Login} />
      <PrivateRoute path={routes.ROUTE_HOME} exact>
        <Home />
      </PrivateRoute>
      <PrivateRoute path={routes.ROUTE_PHOTOS_DETAILS}>
        <Details />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
