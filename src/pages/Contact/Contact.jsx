import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="nouran-container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>GET IN TOUCH</span>

            <h1>
              Let's talk
              <em>.</em>
            </h1>

            <p>
              Have a question about an order, a product, or your
              Nouran experience? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content">
        <div className="nouran-container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="contact-label">
                CONTACT NOURAN
              </span>

              <h2 className="section-title">
                We're here
                <br />
                for you.
              </h2>

              <p>
                Whether you need help choosing a product or have
                a question about your order, send us a message and
                we'll be happy to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <span>Email</span>
                    <p>nouranalamir16@gmail.com</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-clock"></i>
                  </div>

                  <div>
                    <span>Support Hours</span>
                    <p>Saturday – Thursday, 10AM – 6PM</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-icon">
                    <i className="bi bi-chat-heart"></i>
                  </div>

                  <div>
                    <span>Social</span>
                    <p>@nouran.beauty</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <i className="bi bi-check2"></i>
                  </div>

                  <h3>Message Sent</h3>

                  <p>
                    Thank you for reaching out. We'll get back to
                    you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="contact-first-name">
                        First Name
                      </label>

                      <input
                        id="contact-first-name"
                        type="text"
                        placeholder="Your first name"
                        required
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="contact-last-name">
                        Last Name
                      </label>

                      <input
                        id="contact-last-name"
                        type="text"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">
                      Subject
                    </label>

                    <select
                      id="contact-subject"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="order">
                        Order Question
                      </option>
                      <option value="product">
                        Product Question
                      </option>
                      <option value="return">
                        Returns & Exchanges
                      </option>
                      <option value="other">
                        Something Else
                      </option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-message">
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      rows="6"
                      placeholder="How can we help?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;