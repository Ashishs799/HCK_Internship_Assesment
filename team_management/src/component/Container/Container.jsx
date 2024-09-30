import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Table } from "../Table/Table";
import "./Container.css";

export const Container = () => {
  return (
    <div className="flex_column_space container">
      <Navbar />
      <Table />
    </div>
  );
};
