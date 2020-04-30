import React, { useState } from "react";
import "./TodoApp.css";

export const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }} className="todo">
      {todo.text}
      <div>
        <button className="button bg-purp text-white" data-test-id="complete-button" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Uncheck" : "Check"}
        </button>
        <button className="button bg-red text-white " data-test-id="remove-button" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
};

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" placeholder="Add new todo..." value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
};
const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react stuff",
      isCompleted: true,
    },
    {
      text: "Finanny have a bath",
      isCompleted: false,
    },
    {
      text: "Buzz yourself",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="todo-app">
      <div className="todo-holder"></div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />;
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
