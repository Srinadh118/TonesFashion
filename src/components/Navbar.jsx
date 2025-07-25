import MenuButton from "../utility/MenuButton";
import "../styles/components/Navbar.css";
import BrandLogo from "../utility/BrandLogo";
import MenuCard from "./MenuCard";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <nav className="nav-section">
        <BrandLogo isBlack={true} />
        <MenuButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <MenuCard isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
