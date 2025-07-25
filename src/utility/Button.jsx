import { motion } from "motion/react";
import { useState } from "react";
import { MoveRight } from "lucide-react";

const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const buttonVariants = {
    visible: {
      x: 0,
      y: 0,
    },
    hidden: {
      x: 0,
      y: -100,
    },
    rest: {
      rotate: 0,
    },
    hover: {
      rotate: -45,
    },
    click: {
      rotate: 360,
    },
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 12,
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
      onClick={() => setIsClicked(!isClicked)}
      className={props.className}
    >
      <span>{props.children}</span>
      <motion.div
        variants={buttonVariants}
        initial="rest"
        animate={isHovered ? (isClicked ? "click" : "hover") : "rest"}
        className="arrow"
        transition={transition}
      >
        <MoveRight size={28} strokeWidth={2} />
      </motion.div>
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
        className="btn-shadow"
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 12,
        }}
      ></motion.div>
    </motion.div>
  );
};

export default Button;
