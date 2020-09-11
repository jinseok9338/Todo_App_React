import React from "react";
//Import Components
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  //Event

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
