import React, { useState } from "react";
import "./Login.css";
import assets from "../../../public/assets/assets";
import { signup, login, resetPass } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo-container">
          <img className="logo" src={assets.applogo} alt="Logo" />
          <span className="logo-text">Chime In</span>
        </div>
        <h2 className="login-title">{currState}</h2>
        <form onSubmit={onSubmitHandler} className="login-form">
          {currState === "Sign up" && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className="form-input"
                type="text"
                placeholder="Enter your username"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-input"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-input"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            {currState === "Sign up" ? "Create Account" : "Login"}
          </button>
        </form>
        <div className="login-options">
          <div className="login-term">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the terms of use & privacy policy
            </label>
          </div>
          <div className="login-toggle">
            {currState === "Sign up" ? (
              <p>
                Already have an account?{" "}
                <span onClick={() => setCurrState("Login")}>Login here</span>
              </p>
            ) : (
              <p>
                Don't have an account?{" "}
                <span onClick={() => setCurrState("Sign up")}>
                  Sign up here
                </span>
              </p>
            )}
          </div>
          {currState === "Login" && (
            <div className="forgot-password">
              <p>
                Forgot Password?{" "}
                <span onClick={() => resetPass(email)}>Reset here</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
