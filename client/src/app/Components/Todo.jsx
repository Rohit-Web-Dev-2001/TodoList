import React, { useContext, useEffect, useState } from "react";
import PreviousTasks from "./Previous";
import TodayTasks from "./TodayList";
import TomorrowTasks from "./Tomorrow";
import Addtask from "./Addtask";
import { ToDoContext } from "../Context/TodoTaskContext";
import { TodoAuthContext } from "../Context/AuthContext";

const Todo = () => {
  const { getAllTodos, dispatch, todoArr } = useContext(ToDoContext);
  const [showTaskorForm, setshowTaskorForm] = useState("ShowTask");
  const {  AuthData } = useContext(TodoAuthContext);
  useEffect(() => {
    fetchTodos();
  }, [todoArr]);

  const fetchTodos = async () => {
    const data = await getAllTodos(AuthData);
    dispatch({
      type: "GET_ALL_TODOS",
      payload: data,
    });
  };

  return (
    <>
      {showTaskorForm === "ShowTask" ? (
        <>
          <h1 className="text-white">Things to do</h1>
          <div className="  btnContainer d-flex 	justify-content-between gap-2 mx-3">
            <div>
              <h4>{AuthData.Username}</h4>
            </div>
            <div className="d-flex gap-2">
              <button
                type="submit"
                className="btn btn-sm taskbtn shadow-lg"
                style={{
                  background: " linear-gradient(135deg, #ff6b6b, #d63031)",
                }}
                onClick={(e) => {
                  setshowTaskorForm("ShowAddTask");
                }}
              >
                Add Task{" "}
              </button>
              <button
                type="submit"
                className="btn btn-sm taskbtn shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #6b6bff, #3036d6)",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log Out{" "}
              </button>
            </div>
          </div>
          <div className="todocontainer">
            <PreviousTasks />
            <TodayTasks />
            <TomorrowTasks />
          </div>
        </>
      ) : (
        <div className="Taskcontainer">
          <h1 className="text-white">ADD TASK</h1>
          <Addtask setshowTaskorForm={setshowTaskorForm} />
        </div>
      )}
    </>
  );
};

export default Todo;
