import "../styles/pages/ProductsPage.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../lib/data";
import ProductCard from "../components/ProductCard";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const collections = [
  "All",
  "Oversized Tees",
  "Daily Tees",
  "Tones Originals",
  "Shirts",
  "Satin Shirts",
  "Chinos",
  "Accessories",
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="products-container"
    >
      <header className="products-header">
        <h1 className="products-title">Shop Collection</h1>
        <p className="products-subtitle">
          Discover our latest collection of curated streetwear.
        </p>
      </header>

      <div className="category-buttons">
        {collections.map((collection) => (
          <button
            key={collection}
            onClick={() => setActiveCategory(collection)}
            className={`category-button ${
              activeCategory === collection ? "active" : ""
            }`}
          >
            {collection}
          </button>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="products-grid"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProductsPage;
