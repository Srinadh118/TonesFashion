import { motion } from "motion/react";

const MenuButton = ({ toggleMenu, isMenuOpen }) => {
  const topLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: 45, translateY: 12 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 0 },
    open: { rotate: -45, translateY: -12 },
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <motion.button
      onClick={toggleMenu}
      aria-label="Toggle Menu"
      className={`menu-btn ${isMenuOpen ? "open" : ""}`}
    >
      <motion.div
        className="menu-line"
        variants={topLineVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={transition}
      />
      <motion.div
        className="menu-line"
        variants={middleLineVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={transition}
      />
      <motion.div
        className="menu-line"
        variants={bottomLineVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        transition={transition}
      />
    </motion.button>
  );
};

export default MenuButton;
