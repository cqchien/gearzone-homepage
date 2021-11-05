import React from "react";
import { ROUTES } from "../constant/routePath";

const HomePage = React.lazy(() => import("../pages/Home"));
const ProductsPage = React.lazy(() => import("../pages/Products"));
const SignUpPage = React.lazy(() => import("../pages/Signup"));

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
  {
    path: ROUTES.SIGNUP,
    exact: true,
    component: () => <SignUpPage />,
  },
];
