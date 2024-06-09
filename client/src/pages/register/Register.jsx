import "./register.css";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import axios from "axios";

function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", credentials);
      toast.success("User created successfully!");
      setCredentials({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "An unexpected error occurred"
        );
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="register">
        <div className="registerContainer">
          <h3>Sign in or create an account</h3>
          <label>Username</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="username"
            id="username"
            className="registerInput"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            autoComplete="off"
            type="text"
            placeholder="email"
            id="email"
            className="registerInput"
            value={credentials.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            autoComplete="off"
            type="password"
            placeholder="password"
            id="password"
            className="registerInput"
            value={credentials.password}
            onChange={handleChange}
          />

          <button className="registerButton" onClick={handleClick}>
            Register
          </button>

          <div className="registerText">
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
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </>
  );
}

export default Register;
