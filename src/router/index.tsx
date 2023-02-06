import React from "react";
import { useRoutes } from "react-router-dom";

import Layout from "../pages/Layout";
import Figure from "../pages/Figure";
import Weapon from "../pages/Weapon"
import NotFount from "../pages/NotFount";
const routers = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/weapon',
        element: <Weapon />
      },
      {
        path: '/figure',
        element: <Figure />
      },
    ]
  },
  {
    path: "*",
    element: <NotFount />,
  },
]

const Router = () => {
  return useRoutes(routers)
}

export default Router; 