import React, { useState } from "react";
import "./Login.css";
import assets from "../../../public/assets/assets";
import { signup, login } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if the current state is "Sign up"
    if (currState === "Sign up") {
      signup(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_login} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            onChange={(e) => setuserName(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>I agree to the terms & conditions</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an account?
              <span onClick={() => setCurrState("Login")}>
                {" "}
                Click here to login
              </span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account{" "}
              <span onClick={() => setCurrState("Sign up")}>
                {" "}
                Click here to sign up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
