import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMusic, FaHeadphones, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-animation">
            <FaHeadphones className="logo-icon" />
          </div>
          <span>DJ Chezy</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Startseite
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              Über Mich
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/music" className="nav-link" onClick={() => setIsOpen(false)}>
              <FaMusic className="nav-icon" />
              Musik & Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={() => setIsOpen(false)}>
              Galerie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link contact-link" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
