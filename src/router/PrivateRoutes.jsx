import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Authenticated from "./Authenticated";

const Home = props => {
  return (
    <div>
      Home
    </div>
  );
};

const PrivateRoutes = props => {
  return (
    <Suspense fallback={<div>private...</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Suspense>
  );
};

export default Authenticated(PrivateRoutes);
