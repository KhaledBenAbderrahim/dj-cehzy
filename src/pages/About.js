import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic, FaHeadphones, FaCalendarAlt, FaTrophy, FaHeart } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="about-overlay"></div>
        <div className="palm-decoration"></div>
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Über Mich
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section">
        <div className="container">
          <div className="bio-content">
            <motion.div 
              className="bio-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="dj-image"></div>
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Jahre Erfahrung</span>
              </div>
            </motion.div>

            <motion.div 
              className="bio-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title">DJ Chezy</h2>
              <h3 className="bio-subtitle">Karibische Rhythmen & Lateinamerikanische Vibes</h3>
              
              <p>
                ¡Hola! Ich bin DJ Chezy, ein leidenschaftlicher DJ mit dominikanischen Wurzeln. Meine musikalische Reise begann in Santo Domingo, wo ich mit den mitreißenden Rhythmen von Salsa, Bachata und Merengue aufgewachsen bin.
              </p>
              
              <p>
                Seit über 10 Jahren bringe ich die authentische Energie der Karibik auf jede Tanzfläche. Meine Spezialität liegt in der perfekten Mischung aus lateinamerikanischen Klassikern und modernen Hits, die garantiert jedes Publikum begeistern.
              </p>
              
              <p>
                Was mich auszeichnet, ist mein Gespür für die Stimmung des Publikums und die Fähigkeit, die richtige Musik im richtigen Moment zu spielen. Ob Hochzeit, Clubnacht oder Firmenfeier – ich sorge dafür, dass die Tanzfläche niemals leer bleibt!
              </p>

              <div className="signature">
                <span>DJ Chezy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="wave-top"></div>
        <div className="wave-bottom"></div>
        <div className="container">
          <h2 className="section-title">Meine Spezialisierungen</h2>
          
          <div className="specialties-grid">
            <motion.div 
              className="specialty-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="specialty-icon">
                <FaMusic />
              </div>
              <h3>Salsa</h3>
              <p>Von klassischem Salsa Dura bis zu modernem Salsa Romantica - ich bringe die Hitze Kubas und Puerto Ricos auf die Tanzfläche.</p>
            </motion.div>
            
            <motion.div 
              className="specialty-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="specialty-icon">
                <FaHeadphones />
              </div>
              <h3>Bachata</h3>
              <p>Die romantischen und sinnlichen Klänge der Dominikanischen Republik - von traditionell bis zu modernen Bachata-Fusion Styles.</p>
            </motion.div>
            
            <motion.div 
              className="specialty-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="specialty-icon">
                <FaCalendarAlt />
              </div>
              <h3>Reggaeton</h3>
              <p>Die heißesten urbanen Beats aus Puerto Rico, Kolumbien und der ganzen lateinamerikanischen Welt.</p>
            </motion.div>
            
            <motion.div 
              className="specialty-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="specialty-icon">
                <FaTrophy />
              </div>
              <h3>Old School</h3>
              <p>Die besten Klassiker der 80er, 90er und 2000er, die jede Generation auf die Tanzfläche locken.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="why-choose-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Warum DJ Chezy wählen?</h2>
            <p className="section-subtitle">
              Ich bringe mehr als nur Musik zu Ihrer Veranstaltung - ich schaffe ein unvergessliches Erlebnis!
            </p>
          </motion.div>
          
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>Leidenschaft</h3>
              <p>Meine Liebe zur Musik spürt man in jedem Beat. Ich lebe für den Moment, wenn die Tanzfläche zum Leben erwacht.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="feature-icon">
                <FaMusic />
              </div>
              <h3>Vielseitigkeit</h3>
              <p>Von traditionellen karibischen Rhythmen bis zu aktuellen Hits - ich passe mich jedem Publikum und Event an.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="feature-icon">
                <FaHeadphones />
              </div>
              <h3>Technisches Know-how</h3>
              <p>Hochwertige Ausrüstung und jahrelange Erfahrung garantieren einen perfekten Sound und reibungslosen Ablauf.</p>
            </motion.div>
            
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="feature-icon">
                <FaCalendarAlt />
              </div>
              <h3>Zuverlässigkeit</h3>
              <p>Professionelles Auftreten, pünktliche Ankunft und sorgfältige Vorbereitung für Ihre Veranstaltung.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="palm-leaves"></div>
        <div className="container">
          <h2 className="section-title">Was Kunden sagen</h2>
          
          <div className="testimonials-slider">
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote">"</div>
              <p className="testimonial-text">
                DJ Chezy hat unsere Hochzeit zu einem unvergesslichen Erlebnis gemacht! Er hat perfekt verstanden, welche Musik wir uns wünschten, und hat die Stimmung den ganzen Abend über auf dem Höhepunkt gehalten.
              </p>
              <div className="testimonial-author">
                <h4>Stefanie & Michael</h4>
                <span>Hochzeit in Berlin</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="quote">"</div>
              <p className="testimonial-text">
                Als Betreiber eines Latino-Clubs war ich auf der Suche nach einem DJ, der authentische karibische Vibes bringt. Mit DJ Chezy haben wir einen echten Glücksgriff gelandet - unsere Gäste lieben ihn!
              </p>
              <div className="testimonial-author">
                <h4>Carlos Rodriguez</h4>
                <span>Club Havana, Hamburg</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="quote">"</div>
              <p className="testimonial-text">
                Für unsere Firmenfeier mit internationalem Publikum brauchten wir einen vielseitigen DJ. DJ Chezy hat alle begeistert - von lateinamerikanischen Rhythmen bis zu internationalen Hits war alles dabei!
              </p>
              <div className="testimonial-author">
                <h4>Julia Müller</h4>
                <span>Eventmanagerin, Global Solutions GmbH</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
