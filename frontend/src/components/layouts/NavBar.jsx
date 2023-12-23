import React, { useState } from "react";
import "./NavBar-module.css";
import Dropdown from "../Dropdown";
const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="navbar">
      <ul>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Electronics
          {isDropdownVisible && <Dropdown />}
        </li>
        <li>Tv&Appliances</li>
        <li>Men</li>
        <li>Women</li>
        <li>Baby & Kids</li>
        <li>Home &Furniture</li>
        <li>Sports,Books&More</li>
        <li>Flights</li>
        <li>Offerzone</li>
        <li>Grocery</li>
      </ul>
    </div>
  );
};

export default Navbar;
