import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import TableView from "../pages/TableView";
import RandomBookView from "../pages/RandomBookView";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import paths, { pathGenerator } from "./paths";
import BooksPage from "../pages/BooksPage/BooksPage";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import BookPage from "../pages/BookPage/BookPage";
import AllCategoriesPage from "../pages/AllCategoriesPage/AllCategoriesPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <BooksPage />,
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
      { path: paths.bookpage, element: <BookPage /> },
      { path: paths.allcategories, element: <AllCategoriesPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
