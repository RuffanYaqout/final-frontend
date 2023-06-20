import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/home';
import Registration from "./Pages/register"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<h1> SORRY....</h1>
  },
  {
    path: "/register",
    element: <Registration/>,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
  document.getElementById('root')
);