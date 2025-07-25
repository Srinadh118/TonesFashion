import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import BrandLoader from "./components/BrandLoader";

const App = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const state = document.readyState;
      if (state === "interactive") {
        setProgress(60);
      } else if (state === "complete") {
        setProgress(100);
        setTimeout(() => setIsLoaded(true), 800); // short buffer before fade-out
      }
    };

    updateProgress();

    document.onreadystatechange = updateProgress;

    return () => {
      document.onreadystatechange = null;
    };
  }, []);

  return (
    <>
      <BrandLoader progress={progress} isLoaded={isLoaded} />
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/signin" element={<AuthPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
