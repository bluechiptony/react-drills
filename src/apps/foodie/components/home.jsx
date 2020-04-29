import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchBar } from "./searchbar";
import { Dishes, Dish } from "./dishes";
import { Profile } from "./profile";
import { Vendors, Vendor } from "./vendors";

const Home = () => {
  return (
    <div className="container-fluid">
      <div>
        <SearchBar />
      </div>
      <div className="home-grid">
        <div className="vendors-holder">
          <Vendors />
        </div>
        <div className="dishes-holder">
          route
          <Router>
            <Switch>
              <Route path="/" component={Dishes} />
              <Route path="/dish/:code" exact={true} component={Dish} />
              <Route path="/foodie/home/vendor/:slug" exact={true} component={Vendor} />
            </Switch>
          </Router>
        </div>
        <div className="profile-holder">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
