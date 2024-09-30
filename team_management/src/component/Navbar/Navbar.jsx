import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav>
      <div className="notification">
        <IoNotificationsOutline />
        <span>1</span>
      </div>
      <div className="profile">
        <div>
          <span>Samir S.</span>
        </div>
      </div>
    </nav>
  );
};
