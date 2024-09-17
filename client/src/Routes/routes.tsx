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
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <DashboardPage></DashboardPage> },
      { path: "/stock", element: <StockPage></StockPage> },
      { path: "/fournisseur", element: <FournisseurPage></FournisseurPage> },
      { path: "/category", element: <CategoriePage></CategoriePage> },
      { path: "/flux", element: <EntreeSortiePage></EntreeSortiePage> },
      { path: "/inbox", element: <InboxPage></InboxPage> },
      { path: "/login", element: <LoginPage></LoginPage> },
      { path: "/register", element: <RegisterPage></RegisterPage> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
