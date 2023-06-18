import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoggedUserInfo } from "../../App";
import Logo from "../../logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navMenu = [
    { name: "Home", link: "/" },
    { name: "Donation", link: "/donation" },
    { name: "Events", link: "/events" },
    { name: "Blog", link: "/blog" },
  ];
  const { register, isAdmin } = useContext(LoggedUserInfo);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" width={250} />
          </Link>
        </div>
        <ul className="nav-links">
          <div className="menu">
            {navMenu.map((menu) => (
              <li>
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            ))}
            <li>
              {register ? (
                isAdmin ? (
                  <button className="button-5">
                    <Link style={{ color: "white" }} to="/admin">
                      Admin
                    </Link>
                  </button>
                ) : (
                  <button className="button-5">
                    <Link style={{ color: "white" }} to="/profile">
                      Profile
                    </Link>{" "}
                  </button>
                )
              ) : (
                <button className="button-5">
                  <Link style={{ color: "white" }} to="/register">
                    Register
                  </Link>{" "}
                </button>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
