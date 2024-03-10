import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Inscription from "./pages/Inscription/Inscription";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Inscription/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);