import React from "react";

const Form = ({ setInputtext, todos, setTodos, inputtext, setStatus }) => {
  const InputtextHandler = (e) => {
    console.log(e.target.value);
    setInputtext(e.target.value);
  };

  const SubmitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputtext,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputtext("");
  };

  const statusHandler = (e) => {
    //console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputtext}
        type="text"
        onChange={InputtextHandler}
        className="todo-input"
      />
      <button className="todo-button" onClick={SubmitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
