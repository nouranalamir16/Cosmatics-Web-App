import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Categories.css";

const categories = [
  {
  id: 1,
  title: "Skincare",
  subtitle: "Glow from within",
  image:
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=85",
},
  {
    id: 2,
    title: "Makeup",
    subtitle: "Express your beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    title: "Fragrance",
    subtitle: "Leave an impression",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="nouran-container">
        <motion.div
          className="categories-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="categories-eyebrow">EXPLORE NOURAN</span>

          <h2 className="section-title">
            Beauty, <em>your way.</em>
          </h2>

          <p className="section-subtitle">
            Discover carefully selected essentials designed to become part of
            your everyday beauty ritual.
          </p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <motion.div
              className="category-card"
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
            >
              <Link to="/shop" className="category-card-link">
                <div className="category-image-wrapper">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="category-image"
                  />

                  <div className="category-overlay"></div>

                  <div className="category-content">
                    <span>{category.subtitle}</span>

                    <h3>{category.title}</h3>

                    <div className="category-explore">
                      Explore
                      <i className="bi bi-arrow-up-right"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;