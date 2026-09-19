import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="nouran-container">
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="bi bi-bag"></i>
            </div>

            <span className="cart-eyebrow">
              YOUR NOURAN BAG
            </span>

            <h1>Your Bag Is Empty</h1>

            <p>
              Discover something beautiful and add it to
              your Nouran collection.
            </p>

            <Link to="/shop" className="cart-shop-button">
              Continue Shopping
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="nouran-container">
        <div className="cart-header">
          <div>
            <span className="cart-eyebrow">
              YOUR NOURAN BAG
            </span>

            <h1>Your Shopping Bag</h1>
          </div>

          <span className="cart-items-count">
            {cartCount}{" "}
            {cartCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        <section className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link
                  to={`/product/${item.id}`}
                  className="cart-item-image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </Link>

                <div className="cart-item-info">
                  <div>
                    <span className="cart-item-category">
                      {item.category}
                    </span>

                    <Link
                      to={`/product/${item.id}`}
                      className="cart-item-name"
                    >
                      {item.name}
                    </Link>

                    <p className="cart-item-price">
                      ${item.price}
                    </p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-quantity">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <i className="bi bi-dash"></i>
                      </button>

                      <span>{item.quantity}</span>

                      <button
  type="button"
  onClick={() =>
    updateQuantity(
      item.id,
      item.quantity + 1
    )
  }
  disabled={item.quantity >= item.stock}
  aria-label={`Increase ${item.name} quantity`}
>
  <i className="bi bi-plus"></i>
</button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-total">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </div>
              </article>
            ))}

            <div className="cart-actions">
              <Link to="/shop">
                <i className="bi bi-arrow-left"></i>
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={clearCart}
              >
                Clear Bag
              </button>
            </div>
          </div>

          <aside className="cart-summary">
            <span className="cart-summary-eyebrow">
              ORDER SUMMARY
            </span>

            <h2>Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="cart-summary-row">
              <span>Shipping</span>
              <span>
                {cartTotal >= 75 ? "Free" : "$8.00"}
              </span>
            </div>

            <div className="cart-summary-divider"></div>

            <div className="cart-summary-total">
              <span>Total</span>

              <strong>
                $
                {(
                  cartTotal +
                  (cartTotal >= 75 ? 0 : 8)
                ).toFixed(2)}
              </strong>
            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
              <i className="bi bi-arrow-right"></i>
            </Link>

            <div className="cart-secure">
              <i className="bi bi-shield-check"></i>
              <span>Secure checkout</span>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Cart;