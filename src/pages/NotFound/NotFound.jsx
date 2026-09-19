import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="not-found-number">404</span>

        <span className="not-found-eyebrow">
          SOMETHING WENT ELSEWHERE
        </span>

        <h1>
          This page
          <em> doesn't exist.</em>
        </h1>

        <p>
          The page you're looking for may have moved,
          disappeared, or never existed.
        </p>

        <Link to="/" className="not-found-button">
          Back to homepage
          <i className="bi bi-arrow-right"></i>
        </Link>
      </motion.div>

      <div className="not-found-orbit not-found-orbit-one"></div>
      <div className="not-found-orbit not-found-orbit-two"></div>
    </main>
  );
}

export default NotFound;