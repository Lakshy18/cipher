import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div>
      <Link to="" className="logo"> <h1>Cipher streams</h1></Link> 
      </div>
      <div className="nav">
        <Link to="" className="navItems"><FaBell /></Link>
        <Link to="" className="navItems">about</Link>
      </div>
    </div>
  );
};

export default Header;
