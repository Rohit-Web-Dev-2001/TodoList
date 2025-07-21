"use client"
import React, { useContext } from "react";
import Auth from "./Auth/Auth";
import { TodoAuthContext } from "../Context/AuthContext";
import Todo from "./Todo";

const Main = () => {
  const { AuthData } = useContext(TodoAuthContext);

  return <>{!AuthData.email ? <Auth /> : <Todo />}</>;
};

export default Main;
