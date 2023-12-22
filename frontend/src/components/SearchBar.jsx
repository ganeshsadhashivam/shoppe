import React from "react";
import "./SearchBar-module.css";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for Products,Brands,and More..." />
      <CiSearch id="search-icon" size={"25"} />
    </div>
  );
};

export default SearchBar;
