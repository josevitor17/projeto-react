import React from "react";
import Lummy from "./pages/frontPages/lummy.jsx";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";

// Export named para importar depois
export const routes = [
  { path: "/", element: <Lummy /> },
  { path: "/Home", element: <Home /> },
  { path: "/lista-de-usuarios", element: <ListUsers /> },
  { path: "*", element: <div>404 - Página não encontrada</div> },
];
