import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import "./bootstrap-grid.css";
import * as serviceWorker from "./serviceWorker";
import MasterRouter from "./apps/master-router/master-router";

ReactDOM.render(
  <React.StrictMode>
    <MasterRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
