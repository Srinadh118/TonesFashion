import "../styles/pages/HomePage.css";
import "../styles/components/HeroSection.css";
import "../styles/components/BrandShowcase.css";
import "../styles/components/CollectionsSection.css";
// import "../styles/components/ExpressionSection.css";
import "../styles/components/SuccessSection.css";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Collections from "../components/Collections";
// import Expression from "../components/Expression";
import TeamSuccess from "../components/TeamSuccess";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};
const pageTransition = {
  duration: 0.5,
};

const HomePage = () => {
  return (
    <motion.div
      className="main-section"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Hero />
      <Brand />
      <Collections />
      {/* <Expression /> */}
      <TeamSuccess />
    </motion.div>
  );
};

export default HomePage;
