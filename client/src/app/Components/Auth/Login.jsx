import React, { useContext, useState } from "react";
import style from "./Form.css";
import { TodoAuthContext } from "@/app/Context/AuthContext";

const Login = ({ setauth }) => {
  const [toast, settoast] = useState("");
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const { SignIn, AuthData } = useContext(TodoAuthContext);
  const showToastHandler = async (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      alert("Fill Up all the details");
    } else {
      const response = await SignIn(form);
      if (response.status) {
        settoast(response.status);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          settoast("");
        }, 3000);
      } else {
        settoast(response.msg);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          settoast("");
        }, 3000);
      }
    }
  };
  return (
    <>
      <div className="authcontainer">
        <div className="login-container mx-5">
          <h2>LOG-IN</h2>
          <form onSubmit={showToastHandler}>
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
            <button type="submit">Log In</button>
          </form>
          <p
            onClick={() => {
              setauth("Singup");
            }}
          >
            Create a new account ?
          </p>
        </div>
      </div>
      {/* <div className={showToast==true?`show text-white`:`toast text-white`}>Login Successful</div>  */}

      {showToast ? (
        <div className="show text-white">{toast}</div>
      ) : (
        <div className="toast text-white">{toast}</div>
      )}
    </>
  );
};

export default Login;
