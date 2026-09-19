import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductContext";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const { cartItems, cartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const { reduceStock } = useProducts();

  const shipping = cartTotal >= 75 ? 0 : 8;
  const total = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="nouran-container">
          <div className="checkout-empty">
            <i className="bi bi-bag-x"></i>

            <h1>Your Bag Is Empty</h1>

            <p>
              Add something beautiful before continuing to checkout.
            </p>

            <Link to="/shop" className="checkout-back-button">
              Explore Products
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleSubmit = (event) => {
  event.preventDefault();

  if (!isAuthenticated) {
    navigate("/login");
    return;
  }

  const order = {
  id: `NR-${Date.now()}`,
  date: new Date().toLocaleDateString("en-US"),
  items: cartItems,
  total: total,
  status: "Confirmed",
};

const existingOrders = JSON.parse(
  localStorage.getItem("nouran-orders") || "[]"
);

localStorage.setItem(
  "nouran-orders",
  JSON.stringify([order, ...existingOrders])
);

reduceStock(cartItems);
clearCart();

navigate("/order-success");
};

  return (
    <main className="checkout-page">
      <div className="nouran-container">
        <div className="checkout-header">
          <span>SECURE CHECKOUT</span>

          <h1>Complete Your Order</h1>

          <p>
            A simple and considered checkout experience.
          </p>
        </div>

        <section className="checkout-layout">
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <div className="checkout-section">
              <div className="checkout-section-title">
                <span>01</span>

                <div>
                  <h2>Contact Information</h2>
                  <p>Where can we reach you?</p>
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  defaultValue={user?.email || ""}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="checkout-section">
              <div className="checkout-section-title">
                <span>02</span>

                <div>
                  <h2>Shipping Address</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className="checkout-fields-grid">
                <div className="checkout-field">
                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    defaultValue={user?.firstName || ""}
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    defaultValue={user?.lastName || ""}
                    required
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="address">
                  Address
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="checkout-fields-grid">
                <div className="checkout-field">
                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    placeholder="Cairo"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="postalCode">
                    Postal Code
                  </label>

                  <input
                    id="postalCode"
                    type="text"
                    placeholder="12345"
                    required
                  />
                </div>
              </div>

              <div className="checkout-field">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="+20 100 000 0000"
                  required
                />
              </div>
            </div>

            <div className="checkout-section">
              <div className="checkout-section-title">
                <span>03</span>

                <div>
                  <h2>Payment</h2>
                  <p>Choose your payment method.</p>
                </div>
              </div>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  defaultChecked
                />

                <span>
                  <strong>Cash on Delivery</strong>
                  <small>
                    Pay when your order arrives.
                  </small>
                </span>

                <i className="bi bi-cash"></i>
              </label>
            </div>

            <button
              type="submit"
              className="checkout-submit"
            >
              Place Order
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <aside className="checkout-summary">
            <span>YOUR ORDER</span>

            <h2>Order Summary</h2>

            <div className="checkout-products">
              {cartItems.map((item) => (
                <div
                  className="checkout-product"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      {item.quantity} × ${item.price}
                    </p>
                  </div>

                  <strong>
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="checkout-summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <div className="checkout-summary-row">
              <span>Shipping</span>

              <span>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="checkout-summary-divider"></div>

            <div className="checkout-summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Checkout;