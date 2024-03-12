import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/" className="logo"></Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/hero">Početna</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">Funkcije</Link>
          </li>
          <li className="nav-item">
            <Link to="/carousel">Reference</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
