import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineImportExport } from "react-icons/md";
import { FaRegFile } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import { HiOutlineUserGroup } from "react-icons/hi2";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar flex_column_space">
      <div className="sidebar_wrapper">
        <div className="logo flex_space">
          <img src={Logo} alt="" />
          <span>Calender</span>
        </div>
        <div className="menubar flex_column_space">
          <div className="flex_space menu_list">
            <HiOutlineHome />
            <span>Home</span>
          </div>
          <div className="flex_space menu_list">
            <IoIosSearch />
            <span>Search</span>
          </div>
          <div className="flex_space menu_list active">
            <HiOutlineUserGroup />
            <span>Members</span>
          </div>
          <div className="flex_space menu_list">
            <MdOutlineImportExport />
            <span>Import/Export</span>
          </div>
          <div className="flex_space menu_list">
            <FaRegFile />
            <span>Summary</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
