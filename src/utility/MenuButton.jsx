import { motion } from "motion/react";
import { useState } from "react";

const MenuButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const topLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: 45,
      translateY: 12,
    },
  };

  // Variants for the middle line
  const middleLineVariants = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  // Variants for the bottom line
  const bottomLineVariants = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    open: {
      rotate: -45,
      translateY: -12,
    },
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };
  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
      className="menu-btn"
    >
      <motion.div
        className="menu-line"
        variants={topLineVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={transition}
      />
      <motion.div
        className="menu-line"
        variants={middleLineVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={transition}
      />
      <motion.div
        className="menu-line"
        variants={bottomLineVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={transition}
      />
    </motion.button>
  );
};

export default MenuButton;
