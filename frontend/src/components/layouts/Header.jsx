import React from "react";
import "./Header-module.css";
import LOGO from "../../assets/shoppe.png";
import SearchBar from "../SearchBar";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <a href="">
          <img src={LOGO} alt="" width={"100"} />
        </a>
      </nav>
      <SearchBar />
      <div className="user-info">
        <p>ganesh</p>
        <GiShoppingCart size={"35"} color="white" />
        <FaRegHeart size={"30"} color="white" />
      </div>
    </div>
  );
};

export default Header;
