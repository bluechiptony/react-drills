import React from "react";
import { ReactComponent as FoodieLogo } from "../assets/images/foodie-logo.svg";
// import { useHistory } from "react-router-dom";

export const SearchBar = () => {
  //   const history = useHistory();

  return (
    <div className="container-fluid">
      <div className="searchbar-grid ">
        <div>
          <FoodieLogo height={50} />
        </div>
        <div className="centered-flex">
          <input type="search" name="" className="search-bar" placeholder="Search for something to eat ..." />
        </div>
        <div></div>
      </div>
    </div>
  );
};
