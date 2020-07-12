import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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
      <Route render={() => <Redirect to={routes.ROUTE_HOME} />} />
    </Switch>
  );
};

export default Routes;
