import React, { useState, useEffect } from "react";
import "./App.css";
//importing omponents
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {
  //State stuff
  const [inputtext, setInputtext] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once When the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //UseEffcet
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Here is where I can write javascript function and code
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Hello ToDo</h1>
      </header>
      <Form
        inputtext={inputtext}
        todos={todos}
        setTodos={setTodos}
        setInputtext={setInputtext}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
