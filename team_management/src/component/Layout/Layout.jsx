import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Container } from "../Container/Container";

const Layout = () => {
  return (
    <div className="layout flex_space">
      <Sidebar />
      <Container />
    </div>
  );
};

export default Layout;
