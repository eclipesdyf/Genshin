import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import B from "../pages/B";
import C from "../pages/C"
import NotFount from "../pages/NotFount";
const routers = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/C',
        element: <C />
      }
    ]
  },
  {
    path: '/B',
    element: <B />
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