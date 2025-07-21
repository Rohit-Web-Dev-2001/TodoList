import React, { useContext, useEffect, useState } from "react";
import { ToDoContext } from "../Context/TodoTaskContext";
import { TodoAuthContext } from "../Context/AuthContext";

const Addtask = ({ setshowTaskorForm }) => {
  const { AuthData } = useContext(TodoAuthContext);
  const { addTodos, dispatch } = useContext(ToDoContext);
  const [todoTask, setTodoTask] = useState({
    todo_task: "",
    DATE: "",
    MONTH: "",
    YEAR: "",
  });

  const addTodaytodoTask = async () => {
    let date = new Date();
    let newTodoTask = {
      ...todoTask,
      DATE: `${date.getDate()}`,
      MONTH: `${date.getMonth()}`,
      YEAR: `${date.getFullYear()}`,
    };
    const addedTodo = await addTodos(newTodoTask, AuthData);
    dispatch({
      type: "ADD_TODO",
      payload: addedTodo,
    });
  };

  const addTomorrowTask = async () => {
    let date = new Date();
    let newTodoTask = {
      ...todoTask,
      DATE: `${date.getDate() + 1}`,
      MONTH: `${date.getMonth()}`,
      YEAR: `${date.getFullYear()}`,
    };
    const addedTodo = await addTodos(newTodoTask, AuthData);
    dispatch({
      type: "ADD_TODO",
      payload: addedTodo,
    });
  };
  return (
    <div className="containerAddtask px-4 gap-2">
      <input
        type="text"
        className="rounded  shadow-lg"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        autoComplete="off"
        onChange={(e) => {
          setTodoTask((prev) => {
            return { ...prev, todo_task: e.target.value };
          });
        }}
      />
      <div className="buttonclass my-3">
        <button
          type="submit"
          className="btn btn-sm taskbtn shadow-lg"
          style={{
            background: " linear-gradient(135deg, #ff6b6b, #d63031)",
          }}
          onClick={(e) => {
            e.preventDefault();
            addTodaytodoTask();
            setshowTaskorForm("ShowTask");
          }}
        >
          Add Task{" "}
        </button>
        <button
          type="submit"
          className="btn taskbtn btn-sm  shadow-lg"
          style={{
            background: "linear-gradient(135deg, #6b6bff, #3036d6)",
          }}
          onClick={(e) => {
            e.preventDefault();
            addTomorrowTask();
            setshowTaskorForm("ShowTask");
          }}
        >
          Add Tomorrow Task
        </button>

           <button
          type="submit"
          className="btn btn-sm taskbtn shadow-lg"
          style={{
            background: " linear-gradient(135deg, #ff6b6b, #d63031)",
          }}
          onClick={(e) => {
            e.preventDefault();
            setshowTaskorForm("ShowTask");
          }}
        >
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default Addtask;
