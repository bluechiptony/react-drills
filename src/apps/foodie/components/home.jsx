import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import { SearchBar } from "./searchbar";
import { Dishes, DishDetail } from "./dishes";
import { Profile } from "./profile";
import { Vendors, Vendor } from "./vendors";

const Home = () => {
  const { path } = useRouteMatch();

  return (
    <div className="">
      <div>
        <SearchBar />
      </div>
      <div className="home-grid">
        <div className="vendors-holder ">
          <Vendors />
        </div>
        <div className="dishes-holder">
          <Router>
            <Switch>
              <Route exact path={path} component={Dishes} />
              <Route path={`${path}/dishes`} component={Dishes} />
              <Route path={`${path}/dish/:slug`} component={DishDetail} />
              <Route path={`${path}/vendor/:slug`} exact={true} component={Vendor} />
            </Switch>
          </Router>
        </div>
        <div className="profile-holder ">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
