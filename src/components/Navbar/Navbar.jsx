import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductContext";
import { useToast } from "../../context/ToastContext";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isAuthenticated } = useAuth();
  const { products } = useProducts();
  const { showToast } = useToast();

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchTerm("");
  };

  const filteredProducts = products
    .filter((product) => {
      const term = searchTerm.trim().toLowerCase();

      if (!term) {
        return false;
      }

      return (
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    })
    .slice(0, 5);

  const handleProductClick = (productId) => {
    closeSearch();
    navigate(`/product/${productId}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) {
      showToast("Please enter a product name", "error");
      return;
    }

    closeSearch();
    navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
  };

  return (
    <motion.header
      className="nouran-navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="nouran-container navbar-inner">
        <Link
          to="/"
          className="nouran-logo"
          onClick={closeMenu}
        >
          <span className="logo-main">NOURAN</span>
          <span className="logo-sub">
            CONSIDERED BEAUTY
          </span>
        </Link>

        <nav
          className={`navbar-links ${
            menuOpen ? "active" : ""
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/shop" onClick={closeMenu}>
            Shop
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-icon"
            aria-label="Search"
            onClick={() =>
              setSearchOpen((previous) => !previous)
            }
          >
            <i
              className={
                searchOpen
                  ? "bi bi-x-lg"
                  : "bi bi-search"
              }
            ></i>
          </button>

          {isAuthenticated ? (
            <Link
              to="/account"
              className="navbar-user"
              aria-label="My Account"
            >
              <span className="navbar-user-icon">
                <i className="bi bi-person"></i>
              </span>

              <span className="navbar-user-name">
                {user.firstName}
              </span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="navbar-icon"
              aria-label="Account"
            >
              <i className="bi bi-person"></i>
            </Link>
          )}

          <Link
            to="/wishlist"
            className="navbar-icon wishlist-icon"
            aria-label="Wishlist"
          >
            <i className="bi bi-heart"></i>
            <span>{wishlistCount}</span>
          </Link>

          <Link
            to="/cart"
            className="navbar-icon cart-icon"
            aria-label="Shopping bag"
          >
            <i className="bi bi-bag"></i>
            <span>{cartCount}</span>
          </Link>

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            aria-label="Toggle menu"
          >
            <i
              className={`bi ${
                menuOpen ? "bi-x-lg" : "bi-list"
              }`}
            ></i>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="navbar-search-panel"
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
          >
            <div className="nouran-container">
              <form
                className="navbar-search-form"
                onSubmit={handleSearchSubmit}
              >
                <i className="bi bi-search"></i>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Search beauty essentials..."
                  autoFocus
                />

                <button type="submit">
                  Search
                </button>
              </form>

              {searchTerm.trim() && (
                <div className="navbar-search-results">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <button
                        type="button"
                        key={product.id}
                        className="navbar-search-result"
                        onClick={() =>
                          handleProductClick(product.id)
                        }
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                        />

                        <span>
                          <strong>
                            {product.name}
                          </strong>

                          <small>
                            {product.category} · $
                            {product.price}
                          </small>
                        </span>

                        <i className="bi bi-arrow-up-right"></i>
                      </button>
                    ))
                  ) : (
                    <div className="navbar-search-empty">
                      <i className="bi bi-search"></i>
                      <span>
                        No products found.
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/shop" onClick={closeMenu}>
              Shop
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;