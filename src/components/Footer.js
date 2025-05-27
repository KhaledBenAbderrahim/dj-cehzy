import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaSoundcloud, FaSpotify, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wave-top"></div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo">
                <h2>DJ Chezy</h2>
                <p>Karibische Rhythmen & Lateinamerikanische Vibes</p>
              </div>
              <p className="footer-description">
                Professioneller DJ aus der Dominikanischen Republik, spezialisiert auf Salsa, 
                Bachata, Reggaeton und mehr. Verfügbar für Hochzeiten, Clubs und private Events.
              </p>
            </div>
            
            <div className="footer-section">
              <h3>Schnelllinks</h3>
              <ul className="footer-links">
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/about">Über Mich</Link></li>
                <li><Link to="/music">Musik & Events</Link></li>
                <li><Link to="/gallery">Galerie</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Kontakt</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+49 123 456789</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@djchezy.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Berlin, Deutschland</span>
                </div>
              </div>
            </div>
            
            <div className="footer-section">
              <h3>Folgen Sie mir</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                  <FaYoutube />
                </a>
                <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon soundcloud">
                  <FaSoundcloud />
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="social-icon spotify">
                  <FaSpotify />
                </a>
              </div>
              <div className="newsletter">
                <h4>Newsletter abonnieren</h4>
                <form className="newsletter-form">
                  <input type="email" placeholder="Ihre E-Mail Adresse" required />
                  <button type="submit" className="btn-newsletter">Abonnieren</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} DJ Chezy. Alle Rechte vorbehalten.</p>
          </div>
          <div className="legal-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
      
      <div className="tropical-decoration left"></div>
      <div className="tropical-decoration right"></div>
    </footer>
  );
};

export default Footer;
