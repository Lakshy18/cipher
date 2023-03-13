import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Header = (props) => {
  console.log(props.data);
  return (
    <div className="header">
      <div>
        <Link to="" className="logo">
          {" "}
          <h1>Cipher streams</h1>
        </Link>
      </div>
      <div className="nav">
        <Link to="/Notification" className="navItems">
          <FaBell />
        </Link>
        <Link to="/About" className="navItems">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
