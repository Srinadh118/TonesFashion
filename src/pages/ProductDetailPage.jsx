import "../styles/pages/ProductDetailPage.css";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../lib/data";
import { ArrowRight } from "lucide-react";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="product-detail-container"
    >
      <div className="product-detail-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="product-image"
        >
          <img src={product.imageUrl} alt={product.name} className="image" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="product-info"
        >
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <p className="product-description">{product.description}</p>

          <div className="product-section">
            <h3 className="section-title">Details</h3>
            <ul className="product-details">
              {product.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="product-section">
            <h3 className="section-title">Size</h3>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((size) => (
                <button key={size} className="size-button">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="add-to-bag"
          >
            <span>Add to Bag</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;
