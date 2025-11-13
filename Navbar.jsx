import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "white"
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none"
  };

  return (
    <nav style={navStyle}>
      <h1>My Portfolio</h1>
      <ul style={ulStyle}>
        <li><Link style={linkStyle} to="/">Home</Link></li>
        <li><Link style={linkStyle} to="/about">About</Link></li>
        <li><Link style={linkStyle} to="/portfolio">Portfolio</Link></li>
        <li><Link style={linkStyle} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
