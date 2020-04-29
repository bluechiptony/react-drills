import React from "react";
import Login from "./login";

const Landing = () => {
  return (
    <div className="container-fluid bg-foodie-img">
      <div className="row">
        <div className="col-lg-7 bg-land-film"></div>
        <div className="col-lg-5 full-page centered-flex bg-white">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Landing;
