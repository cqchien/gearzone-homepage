import React from "react";
import { ROUTES } from "../constant/routePath";

const HomePage = React.lazy(() => import("../pages/Home"));
const ProductsPage = React.lazy(() => import("../pages/Products"));

export const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: ROUTES.PRODUCTS,
    exact: true,
    component: () => <ProductsPage />,
  },
];
