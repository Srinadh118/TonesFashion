import MenuButton from "../utility/MenuButton";
import "../styles/components/Navbar.css";
import BrandLogo from "../utility/BrandLogo";

const Navbar = () => {
  return (
    <header>
      <nav className="nav-section">
        <BrandLogo isBlack={true} />
        <MenuButton></MenuButton>
      </nav>
    </header>
  );
};

export default Navbar;
