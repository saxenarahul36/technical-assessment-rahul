import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/crossIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menuIcon.svg";
import { FaReact } from "react-icons/fa";
import "./header.css";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header>
      <div className="App-logo">
        <FaReact className="logo" />
      </div>
      <nav className={click ? "nav-options active" : "nav-options"}>
        <ul>
          <li onClick={closeMobileMenu}>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to={"/licenses"} className="nav-link ">
              Licenses
            </Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </header>
  );
};

export default Header;
