import React from "react";
import { BrowserRouter as AppRouter, Switch, Route, Link } from "react-router-dom";

import ExpenseTracker from "../expense-tracker/expense-tracker";
import Socialize from "../socialize/socialize";
import TodoApp from "../todo/TodoApp";
import Foodie from "../foodie/foodie";

const MasterRouter = () => {
  return (
    <AppRouter>
      <div className="">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/expense-tracker" component={ExpenseTracker} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/socialize" component={Socialize} />
          <Route path="/foodie" component={Foodie} />
        </Switch>
      </div>
      <Link to="/">
        <BackToMain />
      </Link>
    </AppRouter>
  );
};

const Home = () => {
  return (
    <div className="app-container">
      <div>
        <h1>Portfolio home</h1>
      </div>
      <div className="router-holder">
        <Link to="/">
          <li>Back home</li>
        </Link>
        <Link to="/expense-tracker">
          <li>Expense Tracker</li>
        </Link>
        <Link to="/todo">
          <li>Todo App</li>
        </Link>
        <Link to="/socialize">
          <li>Socialize App</li>
        </Link>
        <Link to="/foodie">
          <li>Foodie App</li>
        </Link>
      </div>
    </div>
  );
};

const BackToMain = () => {
  return (
    <div className="back-to-main">
      <div className="center-text">
        <i className="uil uil-home-alt text-white"></i>

        <span className="block">home</span>
      </div>
    </div>
  );
};

export default MasterRouter;
