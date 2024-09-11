import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNav from "./Components/SideNav/SideNav";
import ArticleTable from "./Components/ArticleTable/ArticleTable";
import NavBar from "./Components/NavBar/NavBar";
import CategorieTable from "./Components/CategoryTable/CategorieTable";
import FournisseurTable from "./Components/FournisseurTable/FournisseurTable";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="App">
      <SideNav></SideNav>
      <div className=" ps-64  h-full">
        <NavBar></NavBar>
        <div className="p-3 bg-sky-100 min-h-lvh">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
