import React from "react";
import ReactDom from "react-dom";
import TodoApp, { Todo, TodoForm } from "./TodoApp";

describe("Rodo tests", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<TodoApp></TodoApp>, div);
    // ReactDOM.render(<TodoForm></TodoForm>, TodoApp);
  });
});
