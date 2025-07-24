import React from "react";
// import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import MenuButton from "../utility/MenuButton";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-section">
        <div className="nav-logo">
          <Link to={"/"}>
            <img src={logoBlack} alt="" />
          </Link>
        </div>
        <MenuButton></MenuButton>
      </nav>
    </header>
  );
};

export default Navbar;
