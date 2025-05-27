import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaHeadphones, FaCalendarAlt } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero-image');
      const heroContent = document.querySelector('.hero-content');
      
      if (heroImage && heroContent) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        heroContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Animated Background */}
      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="palm-leaves-left"></div>
        <div className="palm-leaves-right"></div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            DJ CHEZY
          </motion.h1>
          <motion.div 
            className="vinyl-animation"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <div className="vinyl-disc">
              <div className="vinyl-center"></div>
            </div>
          </motion.div>
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Karibische Rhythmen & Lateinamerikanische Vibes
          </motion.h2>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Bringen Sie die Energie der Dominikanischen Republik auf Ihre Veranstaltung
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link to="/contact" className="btn btn-primary pulse">
              Jetzt Buchen
            </Link>
            <Link to="/music" className="btn btn-secondary">
              <FaPlay /> Hör mal rein
            </Link>
          </motion.div>
        </motion.div>

        <div className="wave-bottom"></div>
      </section>

      {/* Music Genres Section */}
      <section className="genres-section">
        <div className="container">
          <h2 className="section-title">Meine Spezialisierung</h2>
          <div className="genres-container">
            <motion.div 
              className="genre-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="genre-icon salsa"></div>
              <h3>Salsa</h3>
              <p>Feurige Rhythmen, die zum Tanzen einladen</p>
            </motion.div>
            
            <motion.div 
              className="genre-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="genre-icon bachata"></div>
              <h3>Bachata</h3>
              <p>Romantische Melodien aus der Dominikanischen Republik</p>
            </motion.div>
            
            <motion.div 
              className="genre-card"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="genre-icon reggaeton"></div>
              <h3>Reggaeton</h3>
              <p>Moderne Beats mit urbanen Vibes</p>
            </motion.div>
            
            <motion.div 
              className="genre-card"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="genre-icon oldschool"></div>
              <h3>Old School</h3>
              <p>Klassiker, die niemals aus der Mode kommen</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="events-section">
        <div className="palm-decoration"></div>
        <div className="container">
          <h2 className="section-title">Meine Events</h2>
          <div className="events-grid">
            <motion.div 
              className="event-card wedding"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="event-icon"><FaCalendarAlt /></div>
              <h3>Hochzeiten</h3>
              <p>Machen Sie Ihren besonderen Tag unvergesslich mit einer perfekten Musikauswahl</p>
            </motion.div>
            
            <motion.div 
              className="event-card club"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="event-icon"><FaHeadphones /></div>
              <h3>Diskotheken</h3>
              <p>Bringen Sie die Tanzfläche zum Beben mit energiegeladenen Sets</p>
            </motion.div>
            
            <motion.div 
              className="event-card private"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="event-icon"><FaPlay /></div>
              <h3>Private Feiern</h3>
              <p>Maßgeschneiderte Musik für Ihre private Veranstaltung</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Bereit zum Feiern?</h2>
            <p>Buchen Sie DJ Chezy für Ihre nächste Veranstaltung und erleben Sie echte dominikanische Energie!</p>
            <Link to="/contact" className="btn btn-cta pulse">
              Jetzt Anfragen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
