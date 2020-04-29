import React from "react";
import { BrowserRouter as Brouter, Route } from "react-router-dom";

import "./socialize.css";

import Feed from "./components/feed";
import Profile from "./components/profile";
import Navigation from "./components/navigation";
import Home from "./components/home";

const Socialize = () => {
  return (
    <div className="">
      <Navigation />
      <div className="inner-route-holder">
        <Brouter>
          <Route path="/socialize/feed" component={Feed} />
          <Route path="/socialize/profile" component={Profile} />
          <Route path="/socialize/home" component={Home} />
        </Brouter>
      </div>
    </div>
  );
};

export default Socialize;
