import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="nouran-footer">
      <section className="newsletter-section">
        <div className="nouran-container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="newsletter-eyebrow">STAY IN THE KNOW</span>

            <h2>
              Beauty notes,
              <br />
              <em>sent softly.</em>
            </h2>

            <p>
              Join the Nouran circle for new arrivals, thoughtful beauty
              notes, and occasional little surprises.
            </p>

            <form
              className="newsletter-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                required
              />

              <button type="submit">
                Subscribe
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <div className="footer-main">
        <div className="nouran-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <span>NOURAN</span>
                <small>CONSIDERED BEAUTY</small>
              </Link>

              <p>
                Thoughtfully selected beauty essentials designed to make
                everyday rituals feel extraordinary.
              </p>

              <div className="footer-socials">
                <a href="#instagram" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#facebook" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#pinterest" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>

              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About Nouran</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h3>Customer Care</h3>

              <a href="#shipping">Shipping & Delivery</a>
              <a href="#returns">Returns & Exchanges</a>
              <a href="#faq">FAQ</a>
              <a href="#privacy">Privacy Policy</a>
            </div>

            <div className="footer-column footer-contact">
              <h3>Get in touch</h3>
    
              <a href="mailto:nouranalamir16@gmail.com">
                nouranalamir16@gmail.com
              </a>

              <span>Mon — Fri, 9am — 6pm</span>

              <span>Cairo, Egypt</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 NOURAN. All rights reserved.</span>

            <span>Considered beauty, everyday.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;