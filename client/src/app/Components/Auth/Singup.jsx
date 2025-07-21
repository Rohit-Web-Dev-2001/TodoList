import React, { useContext, useState } from "react";
import style from "./Form.css";
import { TodoAuthContext } from "@/app/Context/AuthContext";

const Signup = ({ setauth }) => {
  const [showToast, setShowToast] = useState(false);
  const { SignUp } = useContext(TodoAuthContext);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const showToastHandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } = form;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
      alert("Please fill in all the details.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      SignUp(form);
      setauth("Login");
    }, 3000);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <div className="authcontainer">
        <div className="login-container mx-5">
          <h2>SIGN-UP</h2>
          <form>
            {/* First Name & Last Name */}
            <div className="input-row">
              <input
                type="text"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                required
              />
            </div>

            {/* Username */}
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => handleChange("username", e.target.value)}
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />

            {/* Password & Confirm Password */}
            <div className="input-row">
              <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => handleChange("password", e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                required
              />
            </div>

            <div className="button-container">
              <button type="submit" onClick={showToastHandler}>
                Sign Up
              </button>
            </div>
          </form>

          <p onClick={() => setauth("Login")}>Already have an account?</p>
        </div>
      </div>

      {showToast ? (
        <div className="show text-white">Registered Successfully</div>
      ) : (
        <div className="toast text-white">Login Successful</div>
      )}
    </>
  );
};

export default Signup;
