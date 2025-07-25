import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const MenuCard = ({ isMenuOpen, setIsMenuOpen }) => {
  const linkRefs = useRef([]);

  useEffect(() => {
    linkRefs.current.forEach((ref, index) => {
      if (ref) {
        const split = new SplitText(ref, { type: "chars" });
        ref.split = split;
      }
    });
  }, []);

  const handleHover = (index) => {
    const split = linkRefs.current[index]?.split;
    if (split) {
      gsap.fromTo(
        split.chars,
        { y: 0, opacity: 1 },
        {
          y: -10,
          opacity: 0.5,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
        }
      );
      gsap.to(split.chars, {
        y: 0,
        opacity: 1,
        delay: 0.2,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.02,
      });
    }
  };

  const navItems = ["Home", "Products", "About", "Sign In"];

  return (
    <div className={`menu-card-container ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-card-content">
        {navItems.map((item, index) => (
          <div className="menu-card-item" key={index}>
            <Link
              to={`${index === 0 ? "/" : item.toLowerCase().replace(" ", "")}`}
              onClick={() => setIsMenuOpen(false)}
              ref={(el) => (linkRefs.current[index] = el)}
              onMouseEnter={() => handleHover(index)}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
