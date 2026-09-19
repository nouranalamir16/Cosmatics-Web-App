import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
    const { showToast } = useToast();

  const liked = isInWishlist(product.id);

  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </Link>

        {product.badge && (
          <span className="product-badge">
            {product.badge}
          </span>
        )}

        <button
          className={`product-wishlist ${
            liked ? "active" : ""
          }`}
          type="button"
          aria-label={
            liked
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          onClick={() => {
  toggleWishlist(product);

  showToast(
    liked
      ? `${product.name} removed from wishlist`
      : `${product.name} added to wishlist`
  );
}}
        >
          <i
            className={
              liked ? "bi bi-heart-fill" : "bi bi-heart"
            }
          ></i>
        </button>

        <Link
          to={`/product/${product.id}`}
          className="product-quick-add"
        >
        </Link>
        <button
  type="button"
  className="product-add-cart"
 onClick={() => {
  addToCart(product);
  showToast(`${product.name} added to your bag`);
}}
>
  <span>Add to Cart</span>
  <i className="bi bi-bag-plus"></i>
</button>
      </div>

      <div className="product-info">
        <div>
          <span className="product-category">
            {product.category}
          </span>

          <Link
            to={`/product/${product.id}`}
            className="product-name-link"
          >
            <h3>{product.name}</h3>
          </Link>
        </div>

        <span className="product-price">
          ${product.price}
        </span>
      </div>
    </motion.article>
  );
}

export default ProductCard;