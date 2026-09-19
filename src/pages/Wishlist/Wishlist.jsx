import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useWishlist } from "../../context/WishlistContext";
import "./Wishlist.css";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
  } = useWishlist();

  return (
    <main className="wishlist-page">
      <div className="nouran-container">

        <div className="wishlist-header">
          <span className="wishlist-eyebrow">
            YOUR SAVED BEAUTY
          </span>

          <h1 className="section-title">
            My Wishlist
          </h1>

          <p>
            Your favorite Nouran pieces, all in one place.
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <div className="wishlist-empty-icon">
              <i className="bi bi-heart"></i>
            </div>

            <h2>Your wishlist is empty</h2>

            <p>
              Save the products you love and find them here later.
            </p>

            <Link to="/shop" className="wishlist-shop-button">
              Explore Products
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((product) => (
              <motion.article
                key={product.id}
                className="wishlist-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="wishlist-image-wrapper">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </Link>

                  <button
                    type="button"
                    className="wishlist-remove"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>

                <div className="wishlist-card-info">
                  <span>{product.category}</span>

                  <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>

                  <strong>${product.price}</strong>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Wishlist;