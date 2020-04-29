import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./foodie.css";
import Home from "./components/home";
import Landing from "./components/landing";

const Foodie = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/foodie/" exact={true} component={Landing} />
          <Route path="/foodie/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Foodie;
