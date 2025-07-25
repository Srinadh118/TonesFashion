import "../styles/components/ProductCard.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductCard = ({ product }) => {
  return (
    <motion.div variants={cardVariants} className="product-card">
      <Link to={`/shop/${product.id}`} className="card-link">
        <div className="card-image-wrapper">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="card-image"
          />
        </div>
        <div className="card-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
