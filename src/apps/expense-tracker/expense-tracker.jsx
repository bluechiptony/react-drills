import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./components/home";
import { Login } from "./components/login";

export const ExpenseTracker = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Switch>
          <Route path="/expense-tracker/" component={Login} />
          <Route path="/expense-tracker/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default ExpenseTracker;
