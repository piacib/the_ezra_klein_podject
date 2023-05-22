import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import TableView from "../pages/TableView";
import RandomBookView from "../pages/RandomBookView";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import paths from "./paths";
import BooksPage from "../pages/BooksPage/BooksPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";

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
        path: paths.table,
        element: <TableView />,
      },
      {
        path: paths.books,
        element: <BooksPage />,
      },
      { path: paths.categories, element: <CategoryPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
