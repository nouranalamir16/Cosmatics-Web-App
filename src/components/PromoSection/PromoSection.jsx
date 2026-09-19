import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./PromoSection.css";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1800&q=90"
          alt="Nouran beauty ritual"
        />

        <div className="promo-image-overlay"></div>
      </div>

      <div className="nouran-container promo-container">
        <motion.div
          className="promo-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="promo-eyebrow">THE NOURAN RITUAL</span>

          <h2>
            Beauty is not
            <br />
            <em>a routine.</em>
          </h2>

          <p>
            It is a moment to slow down, reconnect, and care for yourself.
            Discover a considered collection made for your everyday ritual.
          </p>

          <Link to="/shop" className="promo-button">
            Discover the ritual
            <i className="bi bi-arrow-right"></i>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="promo-floating-note"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span>01</span>
        <p>Slow beauty.<br />Thoughtfully made.</p>
      </motion.div>
    </section>
  );
}

export default PromoSection;