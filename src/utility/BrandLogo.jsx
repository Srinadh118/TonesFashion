import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import { Link } from "react-router-dom";

const BrandLogo = ({ isBlack }) => {
  return (
    <div className="brand-logo">
      <Link to={"/"}>
        <img src={isBlack ? logoBlack : logoWhite} alt="" />
      </Link>
    </div>
  );
};

export default BrandLogo;
