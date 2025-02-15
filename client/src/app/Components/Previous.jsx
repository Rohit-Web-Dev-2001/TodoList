import React, { useContext, useState } from "react";
import { ToDoContext } from "../Context/TodoTaskContext";
const PreviousTasks = () => {
  const { todoArr, deleteTodos, markasCompleted,moveToTomorrow } = useContext(ToDoContext);
  let date = new Date();

  return (
    <>
      <div className="task-list shadow" id="yesterday">
        <div className="d-flex gap-2 justify-content-between">
          <h2>YESTERDAY
          </h2>
          <span className="mx-1 mt-2" style={{ fontSize: "1rem",color: "#f0e68c" }}>{date.getDate()-1}-{date.getMonth()+1}-{date.getFullYear()}</span>
        </div>
        {todoArr?.Previous?.map((ele) => {
          return (
            <div key={ele._id} className="task">
              <div className="form-check d-flex justify-content-center align-content-center gap-2">
                <input
                  className="form-check-input bg-dark mt-1"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={ele.completed}
                  disabled={ele.completed}
                  onChange={() => {
                    markasCompleted(ele._id);
                  }}
                />
                <span
                  className="text-light "
                  style={{
                    textDecoration: `${
                      ele.completed ? "line-through" : "none"
                    }`,
                  }}
                >
                  {ele.todo_task}
                </span>
              </div>

              <div>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodos(ele._id)}
                >
                  Delete
                </button>
                <button className="move-btn" onClick={() => moveToTomorrow(ele._id)}>Move to Tomorrow</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PreviousTasks;
