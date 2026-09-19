import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="nouran-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-eyebrow">
              THE NOURAN STORY
            </span>

            <h1>
              Beauty, <em>considered.</em>
            </h1>

            <p>
              Nouran is a modern beauty destination built around
              thoughtful essentials, timeless elegance, and the
              little rituals that make everyday beauty feel special.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="nouran-container">
          <div className="about-story-grid">
            <motion.div
              className="about-story-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85"
                alt="Nouran beauty collection"
              />
            </motion.div>

            <motion.div
              className="about-story-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <span className="about-label">
                OUR PHILOSOPHY
              </span>

              <h2 className="section-title">
                Less noise.
                <br />
                More <em>beauty.</em>
              </h2>

              <p>
                We believe beauty should feel effortless. Nouran
                brings together carefully selected skincare,
                makeup, and fragrance essentials designed to fit
                beautifully into your everyday routine.
              </p>

              <p>
                From the products we choose to the experience we
                create, every detail is guided by simplicity,
                elegance, and confidence.
              </p>

              <Link to="/shop" className="about-button">
                Explore The Collection
                <i className="bi bi-arrow-right"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="nouran-container">
          <div className="about-values-heading">
            <span className="about-label">
              WHAT WE BELIEVE
            </span>

            <h2 className="section-title">
              The Nouran <em>way.</em>
            </h2>
          </div>

          <div className="about-values-grid">
            <motion.article
              className="about-value"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>01</span>
              <i className="bi bi-stars"></i>
              <h3>Thoughtful Beauty</h3>
              <p>
                A carefully considered collection focused on
                products that deserve a place in your routine.
              </p>
            </motion.article>

            <motion.article
              className="about-value"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>02</span>
              <i className="bi bi-heart"></i>
              <h3>Made For Rituals</h3>
              <p>
                We celebrate the small moments that turn a daily
                routine into something you genuinely enjoy.
              </p>
            </motion.article>

            <motion.article
              className="about-value"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>03</span>
              <i className="bi bi-gem"></i>
              <h3>Timeless Elegance</h3>
              <p>
                From our visual identity to our products, we
                prefer beauty that feels refined and lasting.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="nouran-container">
          <motion.div
            className="about-cta-content"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-label">
              YOUR BEAUTY, YOUR RITUAL
            </span>

            <h2>
              Discover your
              <br />
              <em>Nouran essentials.</em>
            </h2>

            <Link to="/shop" className="about-button">
              Shop Now
              <i className="bi bi-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;