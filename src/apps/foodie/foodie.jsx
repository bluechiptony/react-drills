import React from "react";
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";
import "./foodie.css";
import Home from "./components/home";
import Landing from "./components/landing";

const Foodie = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Router>
        <Switch>
          <Route path={path} exact component={Landing} />
          <Route path={`${path}/home`} component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default Foodie;
