// react router
import { createBrowserRouter } from "react-router-dom";
// pages
import App from "../App";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
      ]
    },
  ]);
