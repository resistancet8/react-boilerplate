import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const RouterComponent = props => {
  return (
    <Router>
      <Suspense fallback={<div>...router</div>}>
        <PublicRoutes />
        <Switch>
          <Route path="/" component={PrivateRoutes} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default RouterComponent;
