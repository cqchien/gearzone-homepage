import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../constant/routePath";
import HomePage from "../containers/HomePage";

const Login = React.lazy(() => import('../containers/Login'));


const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.SIGNIN,
    exact: true,
    component: () => <Login />,
  },
];

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const { path, exact, component } = route;
    return <Route key={index} path={path} exact={exact} component={component} />;
  });
};

export {
  routes, 
  renderRoutes,
};
