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
        <div className="h-full flex">
          {/* SideNav appears outside the border container */}
          <div className="w-64 h-screen">
            <SideNav />
          </div>
          
          {/* Content area with completely revised border effect */}
          <div className="relative flex-1 min-h-lvh">
            {/* Border container using linear gradients as background */}
            <div className="absolute inset-0 rounded-3xl" 
                 style={{
                   background: `
                     linear-gradient(to bottom left, transparent 70%, #22c55e 100%), 
                     linear-gradient(to top right, transparent 70%, #22c55e 100%), 
                     #4b5563
                   `
                 }}>
            </div>
            
            {/* Inner content container */}
            <div className="absolute inset-[10px] rounded-3xl bg-[#171717]">
              <Outlet />
            </div>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
