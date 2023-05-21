import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MesProjets from "./pages/mesProjets/mesProjets";
import MonExperience from "./pages/monExeprience/monExperience";
import Veille from "./pages/veille/veille";
import ContactPage from "./pages/contactPage/contactPage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "react-portfolio",
    element: <App />,
  },
  {
    path: "mes-projets",
    element: <MesProjets />,
  },
  {
    path: "mon-experience",
    element: <MonExperience />,
  },
  {
    path: "ma-veille",
    element: <Veille />,
  },
  {
    path: "me-contacter",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
