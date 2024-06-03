import { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetchNotifications = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Property Ease</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/agents">Agents</a>
        {/* <a href="/contact">Contact</a> */}
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <Link to="/profile">
              <div className="profilePic">
                <img src={currentUser.avatar || "favicon.png"} alt="Profile" />
                <span>{currentUser.username}</span>
              </div>
            </Link>

            <Link to="/profile" className="profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Chat</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/agents">Agents</a>
          <a href="/about">About</a>
          {/* <a href="/contact">Contact</a> */}
          <a href="/login">Sign In</a>
          <a href="/register">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
