import { motion } from "framer-motion";
import "./BrandValues.css";

const values = [
  {
    number: "01",
    icon: "bi-flower1",
    title: "Thoughtfully Selected",
    text: "Every product is chosen with intention, focusing on quality, beauty, and everyday use.",
  },
  {
    number: "02",
    icon: "bi-stars",
    title: "Beauty With Intention",
    text: "We believe beauty should feel personal, effortless, and naturally part of your ritual.",
  },
  {
    number: "03",
    icon: "bi-heart",
    title: "Made For You",
    text: "From your morning routine to your evening ritual, Nouran is designed around your moments.",
  },
];

function BrandValues() {
  return (
    <section className="brand-values-section">
      <div className="nouran-container">
        <motion.div
          className="brand-values-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="brand-values-eyebrow">WHY NOURAN</span>

          <h2 className="section-title">
            More than beauty.
            <br />
            <em>A feeling.</em>
          </h2>

          <p className="section-subtitle">
            We believe the little moments of self-care deserve to feel
            beautiful, intentional, and completely yours.
          </p>
        </motion.div>

        <div className="brand-values-grid">
          {values.map((value, index) => (
            <motion.article
              className="brand-value-card"
              key={value.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <div className="brand-value-top">
                <span className="brand-value-number">{value.number}</span>

                <div className="brand-value-icon">
                  <i className={`bi ${value.icon}`}></i>
                </div>
              </div>

              <div className="brand-value-content">
                <h3>{value.title}</h3>

                <p>{value.text}</p>
              </div>

              <div className="brand-value-line"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandValues;