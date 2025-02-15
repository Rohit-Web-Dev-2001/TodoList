import React, { useState } from "react";
import style from './Form.css'
import Login from "./Login";
import Singup from "./Singup";

const Auth = () => {
  const [auth, setauth] = useState("Login");
  return <>{auth === "Login" ? <Login setauth={setauth}/> : <Singup setauth={setauth} />}</>;
};

export default Auth;
