import React ,{useEffect, useMemo}from "react";
import "./css/HomeHeader.css";
import HomeNavbar from "./HomeNavbar";
import { Outlet } from "react-router-dom";
import useAuthen from "../../hooks/useAuthen";
import AdminNavbar from "./AdminNavbar";

function HomeHeader() {
  const {role} = useAuthen();

  // const roleMemo = useMemo(()=>{
  //   const Token = JSON.parse(localStorage.getItem("Token")) || {};
  //   return Token.role;
  // },[])
  return (
    <div className="container">
      <div className="headerNav">
        <HomeNavbar /> 
      </div>
      <div className="row">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeHeader;
