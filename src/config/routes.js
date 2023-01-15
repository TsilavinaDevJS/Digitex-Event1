import React from "react"
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../layouts";
import Home from "../pages";
import Thématique from "../pages/Thématique"
import Programme from "../pages/Programme"

export const ROUTES = [
  {
    path: "/",
    key: "layout",
    component: <HomeLayout />,
    routes: [
      {
        path:"/Programme",
        key:"Programme",
        component:<Programme/>
      },
      {
        path:"/Thematics",
        key:"Thématique",
        component:<Thématique/>
      },
      {
        path: "/",
        key: "home",
        component: <Home />,
      }
    ],
  },
];

export function RenderRoutes({ routes }) {

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={route.component}>
          {route.routes
            ? route.routes.map((nestedRoute) => (
                <Route
                  key={nestedRoute.key}
                  path={nestedRoute.path}
                  element={nestedRoute.component}
                />
              ))
            : null}
        </Route>
      ))}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
