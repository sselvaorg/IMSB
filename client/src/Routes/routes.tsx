import { createBrowserRouter } from "react-router-dom";
import CategoriePage from "../Pages/CategoriePage/CategoriePage";
import App from "../App";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import StockPage from "../Pages/StockPage/StockPage";
import FournisseurPage from "../Pages/FournisseurPage/FournisseurPage";
import EntreeSortiePage from "../Pages/EntreeSortiePage/EntreeSortiePage";
import InboxPage from "../Pages/InboxPage/InboxPage";
import NotFound from "../Pages/NotFound/NotFound";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoutes from "./ProtectedRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <DashboardPage></DashboardPage> },
      {
        path: "/stock",
        element: (
          <ProtectedRoutes>
            <StockPage></StockPage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/fournisseur",
        element: (
          <ProtectedRoutes>
            <FournisseurPage></FournisseurPage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/category",
        element: (
          <ProtectedRoutes>
            <CategoriePage></CategoriePage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/flux",
        element: (
          <ProtectedRoutes>
            <EntreeSortiePage></EntreeSortiePage>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/inbox",
        element: (
          <ProtectedRoutes>
            <InboxPage></InboxPage>
          </ProtectedRoutes>
        ),
      },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <RegisterPage></RegisterPage> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
