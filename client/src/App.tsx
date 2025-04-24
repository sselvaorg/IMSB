import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import ArticleTable from "./Components/ArticleTable/ArticleTable";
import NavBar from "./Components/NavBar/NavBar";
import CategoryTable from "./Components/CategoryTable/CategoryTable";
import SupplierTable from "./Components/SupplierTable/SupplierTable";
import { Outlet } from "react-router";
import { UserProvider } from "./Contexts/useAuth";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div className="   h-full">
          <div className=" bg-sky-100 min-h-lvh">
            <Outlet></Outlet>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
