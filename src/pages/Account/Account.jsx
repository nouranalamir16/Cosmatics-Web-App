import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Account.css";

function Account() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const [orders] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("nouran-orders") || "[]"
      );
    } catch {
      return [];
    }
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="account-page">
      <div className="nouran-container">
        <div className="account-header">
          <span>YOUR NOURAN ACCOUNT</span>

          <h1 className="section-title">
            My Account
          </h1>

          <p>
            Manage your account and explore your Nouran experience.
          </p>
        </div>

        <div className="account-card">
          <div className="account-avatar">
            <i className="bi bi-person"></i>
          </div>

          <div className="account-info">
            <span>WELCOME</span>

            <h2>
              {user?.firstName} {user?.lastName}
            </h2>

            <p>{user?.email}</p>
          </div>

          <div className="account-links">
            <Link to="/wishlist">
              <i className="bi bi-heart"></i>
              Wishlist
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/shop">
              <i className="bi bi-bag"></i>
              Continue Shopping
              <i className="bi bi-arrow-right"></i>
            </Link>

            <button
              type="button"
              className="account-logout"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              <i className="bi bi-box-arrow-right"></i>
              Logout
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <section className="order-history">
          <div className="order-history-header">
            <span>YOUR ORDERS</span>

            <h2 className="section-title">
              Order History
            </h2>
          </div>

          {orders.length === 0 ? (
            <div className="orders-empty">
              <i className="bi bi-receipt"></i>

              <h3>No Orders Yet</h3>

              <p>
                Your completed orders will appear here.
              </p>

              <Link to="/shop">
                Start Shopping
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          ) : (
            <div className="orders-list">
              {orders.map((order) => (
                <article
                  className="order-card"
                  key={order.id}
                >
                  <div className="order-card-top">
                    <div>
                      <span>ORDER</span>
                      <h3>{order.id}</h3>
                    </div>

                    <div className="order-status">
                      {order.status}
                    </div>
                  </div>

                  <div className="order-card-info">
                    <div>
                      <span>DATE</span>
                      <strong>{order.date}</strong>
                    </div>

                    <div>
                      <span>ITEMS</span>
                      <strong>
                        {order.items.reduce(
                          (totalItems, item) =>
                            totalItems + item.quantity,
                          0
                        )}
                      </strong>
                    </div>

                    <div>
                      <span>TOTAL</span>
                      <strong>
                        ${order.total.toFixed(2)}
                      </strong>
                    </div>
                  </div>

                  <div className="order-products">
                    {order.items.map((item) => (
                      <div
                        className="order-product"
                        key={item.id}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                        />

                        <div>
                          <h4>{item.name}</h4>

                          <span>
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Account;