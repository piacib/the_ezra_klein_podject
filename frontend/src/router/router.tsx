import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import TableView from "../pages/TableView";
import RandomBookView from "../pages/RandomBookView";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Paths from "./paths";
import BooksPage from "../pages/BooksPage/BooksPage";

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
        path: Paths.books,
        element: <BooksPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
