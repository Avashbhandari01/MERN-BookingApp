import "./register.css";
import Navbar from "../../components/navbar/Navbar";

function Register() {
  return (
    <>
      <Navbar />
      <div className="register">
        <div className="registerContainer">
          <h3>Sign in or create an account</h3>
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            className="registerInput"
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            id="email"
            className="registerInput"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            className="registerInput"
          />
          <button className="registerButton">Register</button>
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
    </>
  );
}

export default Register;
