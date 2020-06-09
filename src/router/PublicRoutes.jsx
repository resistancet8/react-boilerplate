import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
const Register = lazy(() => import("./../components/Register/Register"));
const Login = lazy(() => import("./../components/Login/Login"));

const PublicRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>...public routes</div>}>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Suspense>
    </div>
  );
};

export default PublicRoutes;