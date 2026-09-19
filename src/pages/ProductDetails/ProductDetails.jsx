import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import "./ProductDetails.css";



function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products } = useProducts();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="product-not-found">
        <div className="nouran-container">
          <i className="bi bi-bag-x"></i>

          <h1>Product Not Found</h1>

          <p>
            Sorry, we couldn't find the product you're looking for.
          </p>

          <Link to="/shop" className="product-back-button">
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => {
  setQuantity((current) =>
    current < product.stock ? current + 1 : current
  );
};

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1 ? current - 1 : 1
    );
  };

  return (
    <main className="product-details-page">
      <div className="nouran-container">
        <div className="product-breadcrumb">
          <Link to="/">Home</Link>
          <i className="bi bi-chevron-right"></i>
          <Link to="/shop">Shop</Link>
          <i className="bi bi-chevron-right"></i>
          <span>{product.name}</span>
        </div>

        <section className="product-details">
          <div className="product-details-image">
            <img
              src={product.image}
              alt={product.name}
            />

            {product.badge && (
              <span className="product-details-badge">
                {product.badge}
              </span>
            )}
          </div>

          <div className="product-details-content">
            <span className="product-details-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <div className="product-details-rating">
              <span>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </span>

              <small>4.8 · 24 Reviews</small>
            </div>

            <p className="product-details-price">
              ${product.price}
            </p>

            <p className="product-details-description">
              {product.description}
            </p>

            <div className="product-details-divider"></div>

            <div className="product-details-quantity">
  <span>Quantity</span>

  <div className="quantity-control">
    <button
      type="button"
      onClick={decreaseQuantity}
      aria-label="Decrease quantity"
    >
      <i className="bi bi-dash"></i>
    </button>

    <span>{quantity}</span>

    <button
      type="button"
      onClick={increaseQuantity}
      disabled={quantity >= product.stock}
      aria-label="Increase quantity"
    >
      <i className="bi bi-plus"></i>
    </button>
  </div>

  <span className="product-stock">
    {product.stock} items available
  </span>
</div>

            <button
              type="button"
              className="add-to-cart-button"
              onClick={() => addToCart(product, quantity)}
            >
              <span>Add to Cart</span>
              <i className="bi bi-bag"></i>
            </button>

            <div className="product-details-features">
              <div>
                <i className="bi bi-truck"></i>
                <span>Free shipping on orders over $75</span>
              </div>

              <div>
                <i className="bi bi-arrow-repeat"></i>
                <span>Easy returns within 14 days</span>
              </div>

              <div>
                <i className="bi bi-shield-check"></i>
                <span>Secure and trusted checkout</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;