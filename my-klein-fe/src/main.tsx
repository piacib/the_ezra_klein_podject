import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <TableView />,
      },
      {
        path: "table",
        element: <TableView />,
      },
      {
        path: "randombook",
        element: <RandomBookView />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

import GlobalStyle from "./styles/globalStyles";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TableView from "./pages/TableView";
import RandomBookView from "./pages/RandomBookView";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
