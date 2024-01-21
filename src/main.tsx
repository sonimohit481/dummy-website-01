import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./components/home/Home.tsx";
import About from "./components/about/About.tsx";
import Contact from "./components/contact/Contact.tsx";
import User from "./components/user/User.tsx";
import Github, { githubInfoLoader } from "./components/github/Github.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/github",
        element: <Github />,
        loader: githubInfoLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
