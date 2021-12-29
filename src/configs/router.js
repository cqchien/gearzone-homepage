import React from "react";
import { Route } from "react-router-dom";
import { ROUTES } from "../constant/routePath";
import HomePage from "../containers/HomePage";

const Login = React.lazy(() => import('../containers/Login'));
const ProductDetailPage = React.lazy(() => import('../containers/ProductDetailPage'));
const NotFound = React.lazy(() => import('../components/NotFound'));
const Cart = React.lazy(() => import('../components/CartDetail'));
const PaymentPage = React.lazy(() => import('../containers/PaymentPage'));

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
  {
    path: ROUTES.PRODUCT_DETAIL,
    component: () => <ProductDetailPage />,
  },
  {
    path: ROUTES.CART,
    exact: true,
    component: () => <Cart />,
  },
  {
    path: ROUTES.PAYMENT,
    exact: true,
    component: () => <PaymentPage />,
  },
  {
    path: ROUTES.NOT_FOUND,
    exact: true,
    component: () => <NotFound />,
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
