import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: error.response?.data || {
          message: "An unexpected error occurred",
        },
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="loginContainer">
          <h3>Sign in or create an account</h3>
          <label>Username</label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter your username"
            id="username"
            onChange={handleChange}
            className="loginInput"
          />
          <label>Password</label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            id="password"
            onChange={handleChange}
            className="loginInput"
          />
          <button
            disabled={loading}
            className="loginButton"
            onClick={handleClick}
          >
            Login
          </button>
          <div className="loginText">
            <p>
              By signing in or creating an account, you agree with our{" "}
              <span>
                Terms &amp; <br /> conditions &nbsp;
              </span>
              and <span>Privacy statement</span>
            </p>
            <p>
              All rights reserved. <br />
              Copyright (2006 - 2024) - Booking.com™
            </p>
          </div>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
}

export default Login;
