import React, { useContext, useEffect, useState } from "react";
import style from "./Form.css";
import { TodoAuthContext } from "@/app/Context/AuthContext";

const Singup = ({ setauth }) => {
  const [showToast, setShowToast] = useState(false);
 const {SignUp}= useContext(TodoAuthContext)
  const [form, setform] = useState({
    username: "",
    email: "",
    password: "",
  });

  const showToastHandler = (event) => {
    event.preventDefault();
    if (!form.username || !form.email || !form.password) {
        alert("Fill Up all the details")      
    } else {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        SignUp(form)
        setauth("Login");
      }, 3000);
    }
  };
  return (
    <>
      <div className="authcontainer">
        <div className="login-container mx-5">
          <h2>SIGN-UP</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => {
                setform((prev) => {
                  return { ...prev, username: e.target.value };
                });
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setform((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setform((prev) => {
                  return { ...prev, password: e.target.value };
                });
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                showToastHandler(e);
              }}
            >
              Sign In
            </button>
          </form>
          <p
            onClick={() => {
              setauth("Login");
            }}
          >
            Already have an account?
          </p>
        </div>
      </div>
      {showToast ? (
        <div className="show text-white">Registered Successfully</div>
      ) : (
        <div className="toast text-white">Login Successful </div>
      )}
    </>
  );
};

export default Singup;
