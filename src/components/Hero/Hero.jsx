import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(".hero-product", {
          y: 100,
          rotate: 4,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(".hero-orbit-one", {
          y: -80,
          rotate: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".hero-orbit-two", {
          y: 60,
          rotate: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        gsap.to(".hero-glow-one", {
          y: -120,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        gsap.to(".hero-card-one", {
          y: -70,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.3,
          },
        });

        gsap.to(".hero-card-two", {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: ".nouran-hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.3,
          },
        });
      });

      return () => mm.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="nouran-hero">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="nouran-container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            BEAUTY, REFINED
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
          >
            Your skin deserves
            <span> considered beauty.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Thoughtfully selected beauty essentials designed to make
            your everyday ritual feel extraordinary.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/shop" className="hero-primary-button">
              Explore Collection
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link to="/about" className="hero-secondary-button">
              Discover Nouran
            </Link>
          </motion.div>

          <motion.div
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span></span>
            BEAUTY WITH INTENTION
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <motion.div
            className="hero-product"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="product-shadow"></div>

            <div className="product-bottle">
              <div className="bottle-cap"></div>

              <div className="bottle-body">
                <span>NOURAN</span>
                <small>SKIN ESSENTIAL</small>
              </div>
            </div>
          </motion.div>

          <div className="hero-floating-card hero-card-one">
            <i className="bi bi-stars"></i>
            <span>
              Thoughtfully
              <br />
              crafted
            </span>
          </div>

          <div className="hero-floating-card hero-card-two">
            <strong>01</strong>
            <span>
              Everyday
              <br />
              ritual
            </span>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;