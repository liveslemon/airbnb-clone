import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Services from "./Services.jsx";
import Experiences from "./experiences.jsx";
import Error from "./components/error.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/services",
    element: <Experiences />,
    errorElement: <Error />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
    errorElement: <Error />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>
);
