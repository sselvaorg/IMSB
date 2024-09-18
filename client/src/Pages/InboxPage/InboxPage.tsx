import React from "react";
import SideNav from "../../Components/SideNav/SideNav";
import NavBar from "../../Components/NavBar/NavBar";
import { useAuth } from "../../Contexts/useAuth";

type Props = {};

const InboxPage = (props: Props) => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
    </div>
  );
};

export default InboxPage;
