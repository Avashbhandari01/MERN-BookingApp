import { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLogin(
      location.pathname === "/login" || location.pathname === "/register"
    );
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {!user && !isLogin ? (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        ) : null}

        {user && !isLogin ? (
          <div className="navProfile">
            <div className="profileImg">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            </div>
            <div className="profileText">
              <p>Your Account</p>
              <span>Genius Level 1</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
