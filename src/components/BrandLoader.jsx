import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "../utility/BrandLogo";

const BrandLoader = ({ isLoaded, progress }) => {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="brand-loader"
          initial={{ y: 0 }}
          exit={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <div className="logo-container">
            <BrandLogo isBlack={false} />
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress"
              animate={{ width: `${progress}%` }}
              transition={{ ease: "circInOut", duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandLoader;
