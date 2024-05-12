import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Property Ease</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
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
              <div className="notification">3</div>
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
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
