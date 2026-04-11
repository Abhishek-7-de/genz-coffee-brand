import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar() {
  return (
    <nav className="nav-header">
      <a href="#" className="nav-logo">PROFFE</a>
      <div className="nav-links">
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#ingredients">Ingredients</a>
      </div>
    </nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero-section">
      <div className="hero-bg-glow" />
      <div className="container">
        <motion.div 
          className="hero-content"
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">Protein.<br/>Coffee.<br/>Purpose.</h1>
          <p className="hero-subtitle">The only cup that works as hard as you do.</p>
          <button className="btn btn-primary">Shop Now</button>

          <div className="hero-visual">
            <motion.div 
              className="hero-can"
              animate={{ rotateY: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SplitHook() {
  return (
    <section className="section-padding bg-espresso">
      <div className="container">
        <div className="grid-cols-2">
          <motion.div 
            className="split-side split-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="split-text text-linen">Your protein shake</h2>
            <p className="text-linen">Chalky, heavy, extra prep.</p>
          </motion.div>
          <motion.div 
            className="split-side split-right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="split-text text-cream">Your morning coffee</h2>
            <p className="text-cream">Energy, but zero macros.</p>
          </motion.div>
        </div>

        <motion.div 
          className="stats-grid grid-cols-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="stat-card">
            <div className="stat-val">15g</div>
            <div className="stat-label">Isolated Protein</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">100mg</div>
            <div className="stat-label">Caffeine</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">30s</div>
            <div className="stat-label">Prep Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">0</div>
            <div className="stat-label">Compromise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    { name: "Original Black", macro: "15g Protein | 100mg Caff", id: "black" },
    { name: "Creamy Latte", macro: "15g Protein | 80mg Caff", id: "latte" },
    { name: "Mocha Fuel", macro: "20g Protein | 100mg Caff", id: "mocha" },
    { name: "Cold Brew Vanilla", macro: "15g Protein | 110mg Caff", id: "vanilla" },
  ];

  return (
    <section className="section-padding" id="shop">
      <div className="container">
        <h2 className="hero-title" style={{ fontSize: '4rem', marginBottom: '3rem', textAlign: 'center' }}>Choose Your Fuel</h2>
        <div className="grid-cols-4">
          {products.map((p, i) => (
            <motion.div 
              className="product-card" 
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="product-img-ph">{p.name.charAt(0)}</div>
              <h3 className="product-title text-cream">{p.name}</h3>
              <p className="product-macro">{p.macro}</p>
              <button className="btn btn-accent" style={{width: '100%'}}>Add to Cart</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section-padding bg-roast">
      <div className="container">
        <div className="grid-cols-3">
          <motion.div className="step-item" whileInView={{ y: [50, 0], opacity: [0, 1] }} viewport={{ once:true }}>
            <div className="step-number">1</div>
            <h3 className="step-title text-cream">Tear</h3>
            <p className="step-desc">Grab a sachet. No tubs, no measuring scoops required.</p>
          </motion.div>
          <motion.div className="step-item" whileInView={{ y: [50, 0], opacity: [0, 1] }} viewport={{ once:true }} transition={{delay:0.2}}>
            <div className="step-number">2</div>
            <h3 className="step-title text-cream">Pour</h3>
            <p className="step-desc">Mix with hot or cold water. Instantly dissolves in 30 seconds.</p>
          </motion.div>
          <motion.div className="step-item" whileInView={{ y: [50, 0], opacity: [0, 1] }} viewport={{ once:true }} transition={{delay:0.4}}>
            <div className="step-number">3</div>
            <h3 className="step-title text-cream">Go</h3>
            <p className="step-desc">Start your day with maximum energy and perfectly hit macros.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-logo">PROFFE</div>
        <p className="footer-manifesto">
          Protein. Coffee. Purpose. We sit at the intersection of functional fitness nutrition and specialty coffee.
          Built for a generation that lives fast, trains hard, and refuses to compromise.
        </p>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} PROFFE Nutrition. All rights reserved.</span>
          <span>Made for the hustle.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SplitHook />
      <Products />
      <Steps />
      <Footer />
    </main>
  );
}
