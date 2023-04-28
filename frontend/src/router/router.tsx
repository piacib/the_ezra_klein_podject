import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import TableView from "../pages/TableView";
import RandomBookView from "../pages/RandomBookView";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Paths from "./paths";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <TableView />,
      },
      {
        path: Paths.table,
        element: <TableView />,
      },
      {
        path: Paths.randombook,
        element: <RandomBookView />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
