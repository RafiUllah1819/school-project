import React from "react";
import { Siderbar } from "./Components/Sidebar/Siderbar";
import { Header } from "./Components/Header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <Siderbar />
      <Outlet />
    </>
  );
};
