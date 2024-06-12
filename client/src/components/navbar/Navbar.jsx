import { useContext, useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BiUser } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const { user } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(
      location.pathname === "/login" || location.pathname === "/register"
    );
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

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
          <>
            <div
              className="navProfile"
              onClick={() => setOpenModal(!openModal)}
            >
              <div className="profileImg">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
              </div>
              <div className="profileText">
                <p>Your account</p>
                <span>Genius Level 1</span>
              </div>
            </div>
            {openModal && (
              <div className="profileModal">
                <div className="profileModalItems">
                  <div className="profileModalIcon">
                    <BiUser className="profileIcon" />
                  </div>
                  <Link
                    to="/personalinfo"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <div className="profileModalText">Update User Profile</div>
                  </Link>
                </div>
                <div className="profileModalItems">
                  <div className="profileModalIcon">
                    <IoLockClosedOutline className="profileIcon" />
                  </div>
                  <div className="profileModalText">Change Password</div>
                </div>
                <div className="profileModalItems">
                  <div className="profileModalIcon">
                    <IoLogOutOutline className="profileIcon" />
                  </div>
                  <div className="profileModalText" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
