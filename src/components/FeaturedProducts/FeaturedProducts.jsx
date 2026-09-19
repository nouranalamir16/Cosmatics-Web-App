import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

import "swiper/css";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const { products } = useProducts();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const featuredProducts = products.slice(0, 4);

  const renderProduct = (product) => {
    const liked = isInWishlist(product.id);

    return (
      <article className="featured-product-card">
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
            type="button"
            className={`product-wishlist ${
              liked ? "active" : ""
            }`}
            onClick={() => toggleWishlist(product)}
            aria-label={
              liked
                ? `Remove ${product.name} from wishlist`
                : `Add ${product.name} to wishlist`
            }
          >
            <i
              className={
                liked
                  ? "bi bi-heart-fill"
                  : "bi bi-heart"
              }
            ></i>
          </button>

          <button
            type="button"
            className="product-quick-add"
            disabled={product.stock <= 0}
            onClick={() => addToCart(product)}
          >
            <span>
              {product.stock <= 0
                ? "Out of Stock"
                : "Add to bag"}
            </span>

            <i
              className={
                product.stock <= 0
                  ? "bi bi-x-circle"
                  : "bi bi-bag-plus"
              }
            ></i>
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
      </article>
    );
  };

  return (
    <section className="featured-products-section">
      <div className="nouran-container">
        <motion.div
          className="featured-products-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="featured-eyebrow">
              THE NOURAN EDIT
            </span>

            <h2 className="section-title">
              Our <em>essentials.</em>
            </h2>
          </div>

          <Link
            to="/shop"
            className="view-all-products"
          >
            View all
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </motion.div>

        {/* Desktop */}
        <div className="featured-products-grid desktop-products">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              {renderProduct(product)}
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet */}
        <div className="mobile-products">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={18}
            slidesPerView={1.15}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                {renderProduct(product)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;