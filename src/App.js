import React, { Suspense, lazy, Component } from "react";
import { Spin } from 'antd';
const Router = lazy(() => import("./router/Router"));

function App() {
  return (
    <div id="organization">
      <Suspense fallback={<Spin size="large" />}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
