import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import Lummy from "./pages/frontPages/lummy.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Lummy /> },
  { path: "/Home", element: <Home /> },
  { path: "/lista-de-usuarios", element: <ListUsers /> },
]);

export default router;