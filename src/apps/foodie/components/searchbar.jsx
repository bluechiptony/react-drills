import React from "react";

// import { useHistory } from "react-router-dom";

export const SearchBar = () => {
  //   const history = useHistory();

  return (
    <div className="container-fluid">
      <div className="searchbar-grid"></div>
      <div className="searchbar-grid centered-flex">
        <input type="search" name="" className="search-bar" placeholder="Search for something to eat ..." />
      </div>
    </div>
  );
};
