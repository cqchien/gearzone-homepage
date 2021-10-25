import React from "react";
import { ROUTES } from "../constant/routePath";

const HomePage = React.lazy(() => import("../pages/Home"));

export const routes = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: () => <HomePage />,
  },
];
