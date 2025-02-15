"use client";

import axios from "axios";
import { API } from "@/Utils/Utils";

const { createContext, useReducer } = require("react");

let initialState = {
  todoArr: [],
};

async function getAllTodos(authdata) {
  API.interceptors.request.use((req) => {
    req.headers.authorization = `bearer ${authdata.jwtToken}`;
    return req;
  });
  const response = await API.get("/todo/getTodo");
  return response?.data;
}

async function addTodos(body, authdata) {
  try {
    API.interceptors.request.use((req) => {
      req.headers.authorization = `bearer ${authdata.jwtToken}`;
      return req;
    });

    const response = await API.post("/todo/addTodo", body);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodos(id) {
  try {
    const response = await API.delete(`/todo/deleteTodo/${id}`);
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
}

async function markasCompleted(id) {
  try {
    const response = await API.put(`/todo/markasCompleted/${id}`);
  } catch (error) {
    console.log(error);
  }
}

async function moveToTomorrow(id) {
  try {
    const response = await API.put(`/todo/moveToTomorrow/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export const ToDoContext = createContext();

function reducer(state, action) {
  try {
    switch (action.type) {
      case "GET_ALL_TODOS":
        return {
          ...state,
          todoArr: action.payload,
        };
      case "ADD_TODO":
        return {
          ...state,
          todoArr: action.payload,
        };
      case "Delete_TODO":
        return {
          ...state,
          todoArr: action.payload,
        };
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
  }
}

export const ToDoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDoContext.Provider
      value={{
        todoArr: state.todoArr,
        dispatch,
        getAllTodos,
        addTodos,
        deleteTodos,
        markasCompleted,
        moveToTomorrow,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
