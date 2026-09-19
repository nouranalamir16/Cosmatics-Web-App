import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <main className="order-success-page">
      <div className="nouran-container">
        <div className="order-success-content">
          <div className="order-success-icon">
            <i className="bi bi-check2"></i>
          </div>

          <span className="order-success-label">
            ORDER CONFIRMED
          </span>

          <h1>Thank You For Your Order</h1>

          <p>
            Your order has been placed successfully.
            We’re getting everything ready for you.
          </p>

          <div className="order-success-actions">
            <Link to="/shop" className="order-success-primary">
              Continue Shopping
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/account" className="order-success-secondary">
              View My Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;