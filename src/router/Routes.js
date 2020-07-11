import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../views/Login";
import Home from "../views/Home";
import Details from "../views/Details";

import routes from "../config/routes";

const Routes = () => {
  return (
    <Switch>
      <Route path={routes.ROUTE_LOGIN} component={Login} />
      <Route path={routes.ROUTE_HOME} component={Home} exact />
      <Route path={routes.ROUTE_PHOTOS_DETAILS} component={Details} />
    </Switch>
  );
};

export default Routes;
